export function getHeaders(data: {
  contentLength: number
}) {
  const { contentLength } = data
  return {
    'Connection': 'keep-alive',
    'Content-Length': contentLength,
    'sec-ch-ua-platform': '"macOS"',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Brave";v="127", "Chromium";v="127"',
    'x-app-version': '18.2.0',
    'locale': 'fa-IR',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome",
    "Content-Type": "application/json",
    'x-app-name': 'passenger-pwa',
    'App-Version': 'pwa',
    'Accept': '*/*',
    'Sec-GPC': '1',
    'Accept-Language': 'en-US,en;q=0.8',
    'Origin': 'https://app.snapp.taxi',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
  }
}
