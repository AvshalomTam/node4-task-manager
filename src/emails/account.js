const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'avshalom.tam@gmail.com',
        subject: 'Welcome to Task App!',
        text: `Hi ${name}. Let me know how you get along with the app.`
    })
}

const sendCancleEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'avshalom.tam@gmail.com',
        subject: 'We are sorry you are leaving us!',
        text: `Hi ${name}. Let me know why did you leave the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancleEmail
}
