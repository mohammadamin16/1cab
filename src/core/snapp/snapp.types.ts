
interface RequestOTP {
  "cellphone": string,
  "attestation": {
    "method": string,
    "platform": string
  },
  "extra_methods": []
}

interface ResponseOTP {
  "method": string,
  "caption": string,
  "icon_url": string,
  "ttl": number,
  "AvailableMethods": [
    "sms_v2"
  ],
  "available_methods": [
    "sms_v2"
  ],
  "captcha_type": "numeric"
}


interface RequestAuth {
  "attestation": {
    "method": "skip",
    "platform": "skip"
  },
  "grant_type": "sms_v2",
  "client_id": string,
  "client_secret": string,
  "cellphone": string,
  "token": string, // the otp
  "referrer": "pwa",
  "device_id": string
}


interface ResponseAuth {
  "access_token": string,
  "token_type": "Bearer",
  "expires_in": number /* example 12000 */,
  "refresh_token": string,
  "email": string,
  "fullname": string,
  "is_pending": false,
  "is_new_user": false,
  "is_email_required": false,
  "login_status": 1
}



