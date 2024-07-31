# Snapp Api Sample request and response

## Login

### OTP
‍‍‍
#### POST app.snapp.taxi/api/api-passenger-oauth/v3/mutotp

#### Request
```json
{
  "cellphone": "+981234567890",
  "attestation": {
    "method": "skip",
    "platform": "skip"
  },
  "extra_methods": []
}
```

#### Response
```json
{
  "method": "sms_v2",
  "caption": "کد تأیید را با پیامک به شمارهٔ‌ %s فرستادیم.",
  "icon_url": "",
  "ttl": 60,
  "AvailableMethods": [
    "sms_v2"
  ],
  "available_methods": [
    "sms_v2"
  ],
  "captcha_type": "numeric"
}
```

### Captcha

TODO: where does the id come from?

#### GET https://app.snapp.taxi/api/captcha/api/v1/generate/text/numeric/[id]


#### Response
```json
{
  "ref_id": "...",
  "image": "data:image/JPEG;base64,...",
  "accessibility_url": ""
}
```



### Auth

#### POST https://app.snapp.taxi/api/api-passenger-oauth/v3/mutotp/auth

#### Request
```json
{
  "attestation": {
    "method": "skip",
    "platform": "skip"
  },
  "grant_type": "sms_v2",
  "client_id": "...",
  "client_secret": "...",
  "cellphone": "+98123456789",
  "token": "******", // the otp
  "referrer": "pwa",
  "device_id": "..."
}
```

#### Response
```json
{
  "access_token": "...",
  "token_type": "Bearer",
  "expires_in": [seconds] /* example 12000 */,
  "refresh_token": "...",
  "email": "...",
  "fullname": "...",
  "is_pending": false,
  "is_new_user": false,
  "is_email_required": false,
  "login_status": 1
}
```



### Price

#### POST https://app.snapp.taxi/api/api-base/v2/passenger/newprice/s/6/0

#### Request
```json
{
  "points": [
    {
      "lat": "35.7",
      "lng": "51.3"
    },
    {
      "lat": "35.7",
      "lng": "51.4"
    },
    null
  ],
  "round_trip": false,
  "voucher_code": null,
  "service_types": [
    1,
    2
  ],
  "hurry_price": 0,
  "priceriderecom": false,
  "tag": "0"
}
```

#### Response
```json
{
  "status": 200,
  "data": {
    "prices": [
      {
        "final": 360000,
        "final_lower": null,
        "is_hurry_enable": false,
        "raw_fare": 390000,
        "raw_fare_lower": null,
        "type": "1",
        "is_free_ride": false,
        "is_discounted_price": true,
        "is_surged": false,
        "is_enabled": true,
        "is_post_price": false,
        "tag": "",
        "texts": {
          "free_ride": "",
          "free_ride_footer": "",
          "discounted_price": "تخفیف برای شما!",
          "discounted_price_footer": "تبریک، این سفر ۷٪ تخفیف دارد. از سفرتان لذت ببرید!",
          "surge": "",
          "surge_footer": "",
          "surge_link": null,
          "promotion_message": "",
          "promotion_message_footer": "",
          "discount_and_surge_price": "تخفیف برای افزایش قیمت موقت",
          "discount_and_surge_price_footer": "به دلیل بالا رفتن تقاضا، هزینه این سفر به طور موقت از سقف شورای شهر برای تاکسی تلفنی بیشتر است. همچنین این سرویس شامل ۷٪ تخفیف شده است.",
          "post_price": "",
          "post_price_footer": ""
        },
        "distance": 0,
        "eta": "",
        "items": [],
        "promotion_error": "",
        "voucher_type": 0
      },
      {
        "final": 540000,
        "final_lower": null,
        "is_hurry_enable": false,
        "raw_fare": null,
        "raw_fare_lower": null,
        "type": "2",
        "is_free_ride": false,
        "is_discounted_price": false,
        "is_surged": false,
        "is_enabled": true,
        "is_post_price": false,
        "tag": "",
        "texts": {
          "free_ride": "",
          "free_ride_footer": "",
          "discounted_price": "تخفیف برای شما!",
          "discounted_price_footer": "تبریک، این سفر ۰٪ تخفیف دارد. از سفرتان لذت ببرید!",
          "surge": "",
          "surge_footer": "",
          "surge_link": null,
          "promotion_message": "",
          "promotion_message_footer": "",
          "discount_and_surge_price": "تخفیف برای افزایش قیمت موقت",
          "discount_and_surge_price_footer": "به دلیل بالا رفتن تقاضا، هزینه این سفر به طور موقت از سقف شورای شهر برای تاکسی تلفنی بیشتر است. همچنین این سرویس شامل ۰٪ تخفیف شده است.",
          "post_price": "",
          "post_price_footer": ""
        },
        "distance": 0,
        "eta": "",
        "items": [],
        "promotion_error": "",
        "voucher_type": 0
      }
    ],
    "tag": "0",
    "confirm_before_ride": false,
    "confirm_before_ride_message": "",
    "waiting": [
      {
        "key": "0m-5m",
        "price": 30000,
        "text": "۰ تا ۵ دقیقه"
      },
      {
        "key": "5m-10m",
        "price": 60000,
        "text": "۵ تا ۱۰ دقیقه"
      },
      {
        "key": "10m-15m",
        "price": 90000,
        "text": "۱۰ تا ۱۵ دقیقه"
      },
      {
        "key": "15m-20m",
        "price": 120000,
        "text": "۱۵ تا ۲۰ دقیقه"
      },
      {
        "key": "20m-25m",
        "price": 150000,
        "text": "۲۰ تا ۲۵ دقیقه"
      },
      {
        "key": "25m-30m",
        "price": 180000,
        "text": "۲۵ تا ۳۰ دقیقه"
      },
      {
        "key": "30m-45m",
        "price": 270000,
        "text": "۳۰ تا ۴۵ دقیقه"
      },
      {
        "key": "45m-1h",
        "price": 360000,
        "text": "۴۵ دقیقه تا ۱ ساعت"
      },
      {
        "key": "1h-1h30m",
        "price": 540000,
        "text": "۱ تا ۱.۵ ساعت"
      },
      {
        "key": "1h30m-2h",
        "price": 720000,
        "text": "۱.۵ تا ۲ ساعت"
      },
      {
        "key": "2h-2h30m",
        "price": 900000,
        "text": "۲ تا ۲.۵ ساعت"
      },
      {
        "key": "2h30m-3h",
        "price": 1080000,
        "text": "۲.۵ تا ۳ ساعت"
      },
      {
        "key": "3h-3h30m",
        "price": 1260000,
        "text": "۳ تا ۳.۵ ساعت"
      },
      {
        "key": "3h30m-4h",
        "price": 1440000,
        "text": "۳.۵ تا ۴ ساعت"
      }
    ],
    "details": null
  }
}
```


