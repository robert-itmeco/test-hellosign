require('dotenv').config();
const express = require("express")
const app = express()
const port = 3000
const hellosign = require("hellosign-sdk")

app.get("/", (req, res) => {
    res.send("Test")
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

const opts = {
    test_mode: 1,
    clientId: `${process.env.HELLOSIGN_CLIENT_ID}`,
    subject: 'The NDA we talked about',
    message: 'Please sign this credit application and then we can discuss more.',
    signers: [
      {
        email_address: 'robert@itmeco.com',
        name: 'robert'
      }
    ],
    files: ['credit-app.pdf']
  };

  hellosign.signatureRequest.createEmbedded(opts).then((res) => {
    // handle response
  }).catch((err) => {
    // handle error
  });



// const HelloSign = require("hellosign-embedded"); 
// const client = new HelloSign({
//     clientId: process.env.HELLOSIGN_CLIENT_ID
// })

// function launchHelloSign(url) {
//     client.open(url)
// }

// launchHelloSign(url)