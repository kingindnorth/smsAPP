const express = require("express")
require("dotenv").config()
// const client = require('twilio')(accountSid, authToken);

// const toNumber = ''; // Recipient's phone number
// const fromNumber = '';
// const message = 'Sample Test Message';

// client.messages
//   .create({
//     body: message,
//     from: fromNumber,
//     to: toNumber
//   })
//   .then(message => console.log('SMS sent successfully:', message.sid))
//   .catch(error => console.error('Failed to send SMS:', error));

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: process.env.apiKey,
  apiSecret: process.env.apiSecret
})

const from = "Vonage APIs"
const to = ""
const text = 'Hi, my name is prajjawal tiwari from niveus KBL project. Hope you are doing well, Thankyou!'

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();

const app = express()

app.listen(3000,()=>{
    console.log("server running")
})