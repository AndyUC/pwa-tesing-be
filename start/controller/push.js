const BadrequestError = require("../middleware/badrequest");
const NotfoundError = require('../middleware/notfound');
const { StatusCodes } = require("http-status-codes");
const webpush = require('web-push')

const createpush = async (req, res) => {
    const { subscription: subscription } = req.body
    console.log(subscription)
    const parsedUrl = new URL(subscription.subscription.endpoint)
    const audience = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
    const vapidHeaders = webpush.getVapidHeaders(
      audience,
      'mailto: example@web-push-node.org',
      "BPnBnQ3-OJ3fwA51Ispz7srlLRefQdKQipkjA4fnzYJnIim4Wc0LHF3-Z-KafgK_XxrO-8eI6rvpbvQ7h12qreo",
      "r4N0hXl_uo62_Dkh9cFgov61Hcw4zumjC54vffKxFXk",
      'aes128gcm'
    );
    const option = {

    }
    webpush.sendNotification(
      subscription.subscription,
      JSON.stringify({ title: "A new message here" }),
      {
        headers: vapidHeaders
      }
    )
}
module.exports = { createpush }