import { snappApi } from "./snapp.api";

export const snapp = {
  sendOtp(phoneNumber: string): Promise<{ ttl: number }> {
    return snappApi.sendOtp(phoneNumber);
  },
  auth(phoneNumber: string, token: string): Promise<{ access_token: string }> {
    return snappApi.auth(phoneNumber, token);
  },
}
