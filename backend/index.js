require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();
const PersonInfo = require("./model/personInfo");
app.use(express.json());
app.use(cors());

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken); 

app.post('/api/sms', (req, res) => {
    res.header('Content-Type', 'application/json');
    const personInfo = new PersonInfo(req.body);
    console.log(personInfo);
    res.send(JSON.stringify({ success: true }));
    // client.messages
    //     .create({
    //     from: process.env.TWILIO_PHONE_NUMBER,
    //     to: personInfo.phoneNum,
    //     body: `\nWelcome to Naked Ice Cream, ${personInfo.name}! 
    //        \nShow this message to our staff to get a $2 discount off when you spend min. $10 in store.`
    //     })
    //     .then(() => {
    //         res.send(JSON.stringify({ success: true }));
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.send(JSON.stringify({ success: false }));
    //     });
});
const PORT = process.env.PORT || 8080
app.listen(PORT, () =>
  console.log(`Express server is running on localhost:${PORT}`)
);