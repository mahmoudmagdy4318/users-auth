const nodemailer = require('nodemailer');
const { mailConfig, emailFrom } = require('../../config');
const { verifyEmailTemplate } = require('../../templates');

const transporter = nodemailer.createTransport(mailConfig);

const sendEmail = ({ subject, html }) => async (userEmail) => {
  try {
    const info = await transporter.sendMail({
      from: emailFrom,
      to: userEmail,
      subject,
      html,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  sendVerificationEmail: (token) => sendEmail({
    subject: 'Email Verification',
    html: verifyEmailTemplate(token),
  }),
};
