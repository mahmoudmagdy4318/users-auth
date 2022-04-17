const nodemailer = require('nodemailer');
const { mailConfig, emailFrom } = require('../../config');
const { verifyEmailTemplate } = require('../../templates');
const logger = require('../logs/logger');

const transporter = nodemailer.createTransport(mailConfig);

const sendEmail = ({ subject, html }) => async (userEmail) => {
  try {
    const info = await transporter.sendMail({
      from: emailFrom,
      to: userEmail,
      subject,
      html,
    });

    logger.info(`Message with id ${info.messageId} sent to ${userEmail}`);
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

module.exports = {
  sendVerificationEmail: (token) => sendEmail({
    subject: 'Email Verification',
    html: verifyEmailTemplate(token),
  }),
};
