module.exports = {
  env: 'dev',
  url: process.env.URL || 'http://localhost:5000',
  port: process.env.PORT || 5000,
  considerBlacklist: true,
  rabbitmq: {
    url: process.env.RABBITMQ_URL || '',
    channel: process.env.RABBITMQ_CHANNEL || '',
  },
  redis: {
    host: process.env.REDIS_HOST || '',
    port: process.env.REDIS_PORT || 0,
    password: process.env.REDIS_PASS || '',
  },
  mail: {
    from: process.env.MAIL_FROM || '"Test My App 👻" <alper.unal92@hotmail.com>',
    subject: process.env.MAIL_SUBJECT || 'Test My App\ have a new message!',
    user: process.env.MAIL_USER || '',
    pass: process.env.MAIL_PASS || '',
    host: process.env.MAIL_HOST || '',
    port: process.env.MAIL_PORT || 465,
  },
};
