export default (req, res) => {

    const nodemailer  = require('nodemailer')
    const emailValidatorRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const transporter = nodemailer.createTransport({
        port: process.env.MAIL_PORT,
        host: process.env.MAIL_HOST,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
        secure: true
    }) 

    if (req.method == "POST")
    {   
        // To can be a list of mails
        let {subject, to, body} = req.body
        
        if (!subject || !to || !body) res.status(400).send({ error: "Incomplete resquest body!" })
        // if (!emailValidatorRegex.test(to)) res.status(400).send({ error: "Invalid E-mail!" }) 

        const mailData = {
            from: process.env.MAIL_USER,
            to: to,
            subject: subject,
            text: body,
            html: `<div>${body}</div>`
        }

        transporter.sendMail(mailData, (err, info) => {
            if (err)
                res.send({ error: err })
            else
                res.send({ message: info })
        })
    }
    else
    {
        res.send({ error: "Request method invalid!" })
    }

}