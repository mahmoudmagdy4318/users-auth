const { verificationLink: link } = require('../config');

module.exports = (token) => `
    <div> 
      <div>
      <a 
        style = {"color: #348eda;"}
        href=${link}?token=${token}>Verify Email Address</a>
      </div> 
    </div>
`;
