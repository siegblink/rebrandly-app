const request = require('request')
const linkRequest = {
  destination: 'https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g',
  domain: { fullName: 'rebrand.ly' },
  // slashTag: 'A_NEW_SLASHTAG',
  // title: 'Rebrandly Youtube channel'
}

const requestHeaders = {
  'Content-Type': 'application/json',
  'apikey': '191827d91b0c4bdab9e0c2f6873fe9ec',
  // workspace: 'YOUR_WORKSPACE_ID',
}

request(
  {
    uri: 'https://api.rebrandly.com/v1/links',
    method: 'POST',
    body: JSON.stringify(linkRequest),
    headers: requestHeaders,
  },
  function(err, response, body) {
    const link = JSON.parse(body)
    console.log(
      `Long URL was ${link.destination}, short URL is ${link.shortUrl}`
    )
  }
)
