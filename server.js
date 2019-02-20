const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const path = require('path');
const cors = require('cors');

const app = express();

const frontend = path.join(__dirname, 'dist/htic-website');
const frontend_index = path.join(frontend, 'index.html');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist/htic-website'));

app.post('/send', (req, res) => {

    const emailText = `Contact Request from ` + req.body['name'] + ' at ' + req.body['organization']
        + '\n \n' +
        'Email: ' + req.body['email']
        + '\n \n' +
        'Message: ' + req.body['message'];
    + '\n \n';


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fareed29081995@gmail.com',
            pass: 'fareed@123'
        }
    });

    // setup email data with unicode symbols    
    let mailOptions = {
        from: '"Contact Form"<' + req.body['email'] + '>', // sender address
        to: '18cs701008@kristujayanti.com', // list of receivers
        subject: 'WEB Tech Assigment - Contact Request', // Subject line
        text: emailText // plain text body
    };


    transporter.sendMail(mailOptions, (error, info) => {
        console.log(info);
        if (error) {

            res.json({ 'success': false });
        }
        console.log('Message sent: %s', info.messageId);

        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.json({ 'success': true });
    });

});

app.use('*', (req, res) => {
    res.sendFile(frontend_index)
});

app.listen(3000, () => console.log('server started...'));