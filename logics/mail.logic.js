const config = require('../config');
const { encrypt } = require('./cyrpto.logic');

function generateMessageWithType({ mailInfo }) {
  const message = {
    to: mailInfo.email,
    from: config.mail.from,
    template: `${mailInfo.type}`,
    subject: config.mail.subject,
    context: {},
  };

  switch (mailInfo.type) {
  case 'register':
    message.context = {
      ...message.context,
      ...{
        appName: mailInfo.appName || 'Test My App',
        welcomeTitle: mailInfo.welcomeTitle || 'Welcome!',
        nameSurname: mailInfo.nameSurname,
        welcomeMessage: mailInfo.welcomeMessage || 'It's nice to see you among us nameSurname .',
        mailIcon: mailInfo.mailIcon || 'https://img.icons8.com/clouds/100/000000/america.png',
        webSiteLink: mailInfo.webSiteLink || 'http://localhost:3000',
        webSiteLinkButton: mailInfo.webSiteLinkButton || 'Lets Start !',
        thanksText: mailInfo.thanksMessage || 'Thank you for supporting our project!',
        sincerelyText: mailInfo.sincerelyMessage || 'With my best regards',
        needHelpText: mailInfo.needHelpText || 'Need help?',
        needHelpLink: mailInfo.needHelpLink || 'alper.unal92@hotmail.com',
        unsubscribe: `${config.url}/unsubscribe?email=${encrypt(mailInfo.email)}`,
      },
    };
    break;
  case 'forget':
    message.context = {
      ...message.context,
      ...{
        appName: mailInfo.appName || 'Test My App',
        forgetTitle: mailInfo.forgetTitle || 'Forgot Password:(',
        nameSurname: mailInfo.nameSurname,
        forgetMessage: mailInfo.forgetMessage || '<b>nameSurname</b> Forgot your password! Let's follow the steps below..',
        mailIcon: mailInfo.mailIcon || 'https://img.icons8.com/clouds/100/000000/jake.png',
        webSiteLink: mailInfo.webSiteLink || 'http://localhost:3000',
        webSiteLinkButton: mailInfo.webSiteLinkButton || 'Reset your password!',
        warningText: mailInfo.thanksMessage || 'If you did not send the password reset request, Please ignore it. !',
        sincerelyText: mailInfo.sincerelyMessage || 'With my best regards',
        needHelpText: mailInfo.needHelpText || 'Need help?',
        needHelpLink: mailInfo.needHelpLink || 'alper.unal92@hotmail.com',
        unsubscribe: `${config.url}/unsubscribe?email=${encrypt(mailInfo.email)}`,
      },
    };
    break;
  default:
    break;
  }

  return message;
}

module.exports = {
  generateMessageWithType,
};
