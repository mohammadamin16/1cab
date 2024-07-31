import axios, { AxiosError } from "axios";
import { getHeaders } from "../utils";


export const snappApi = {
  async sendOtp(phoneNumber: string): Promise<{ ttl: number }> {
    const body: RequestOTP = {
      extra_methods: [],
      cellphone: phoneNumber,
      attestation: {
        "method": "skip",
        "platform": "skip"
      }
    }
    try {
      const stringified = JSON.stringify(body)
      const contentLength = stringified.length
      const res = await axios.post('https://app.snapp.taxi/api/api-passenger-oauth/v3/mutotp', stringified, {
        headers: {
          ...getHeaders({ contentLength })
        }
      })
      const response = res.data as ResponseOTP
      return { ttl: response.ttl }
    } catch (e) {
      const error = e as AxiosError
      console.error("error", error.toJSON())
      return Promise.reject(error)
    }
  },
  async auth(phoneNumber: string, otp: string): Promise<{ access_token: string }> {
    const body: RequestAuth = {
      token: otp,
      cellphone: phoneNumber,
      referrer: "pwa",
      device_id: "web",
      client_id: "",
      attestation: {
        "method": "skip",
        "platform": "skip"
      },
      grant_type: "sms_v2",
      client_secret: ""
    }

    try {
      const stringified = JSON.stringify(body)
      const contentLength = stringified.length
      const res = await axios.post('https://app.snapp.taxi/api/api-passenger-oauth/v3/token', stringified, {
        headers: {
          ...getHeaders({ contentLength })
        }
      })
      const response = res.data as ResponseAuth
      console.log("response", response)
      return { access_token: response.access_token }
    }
    catch (e) {
      const error = e as AxiosError
      console.error("error", error.toJSON())
      return Promise.reject(error)
    }
  }
}
