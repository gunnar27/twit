//API Key: eh5LEoIiqZK6BHiVFDKghwp2G
//API Secret Key: XRLcrMa1qEZ9oMPXKmOxqfqxSqUaR18RrwuTrUfMzBHoa8AtDb
// Bearer Token: AAAAAAAAAAAAAAAAAAAAABRxlQEAAAAAgET9zR4wi4Wa9sOQLwZxgiV8G0c%3DeyWsRmWOwIYwHpZwjEbC633hHn1GkUME0L71pTfYrcS8b0xF5B

const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: '2CyTEouuUVaYADYAgu0z5KEqU',
    appSecret:'4hz8FVpK8CYsTdoPLwfUfNfXqefNCO65k5QRMgVH4aJ6UQjOey',
    accessToken:'1062387454760513536-N7VAuAyUsu94j8frwGdar0ezzghMVJ',
    accessSecret: '3eiKWLqjt0aO1voWpAJ4jjIShJtbV4Xc9lUpiNBUdkWGi',

})

const rwClient = client.readWrite

module.exports = rwClient