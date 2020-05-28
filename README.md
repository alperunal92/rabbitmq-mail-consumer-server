# rabbitmq-mail-consumer-server

Rabbitmq-mail-consumer-server is an independent mail sending server that abstracts the sending mails from system. Services that want to send mail do not need to know where and how this server works. Just make sure you're looking at the same RabbitMQ channel.

> Sending mail is abstracted from the whole system. You don't have to think ✌️.




### RabbitMQ Basic Architecture System
![picture](https://github.com/alperunal92/rabbitmq-mail-consumer-server/blob/master/images/1.png)
Rabbitmq-mail-consumer-server uses a number of open source projects to work properly:


* [Node Js] - for runnig server
* [Rabbit MQ] - for getting messages from another server

### Installation

Rabbitmq-mail-consumer-server requires [Node.js](https://nodejs.org/en/download/) v8+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd rabbitmq-mail-consumer-server
$ npm install 
$ node app
```
For Make A Docker Image:

```sh
$ docker build -t  rabbitmq-mail-consumer-server .
$ docker run --env-file .env -p 5000:5000 rabbitmq-mail-consumer-server
```

Pull From Docker Hub

- latest
- rpi => ARM build for raspperry pi

```sh
$ docker run --env-file .env -p 5000:5000 alperunal92/rabbitmq-mail-consumer-server:latest
or
$ docker run --env-file .env -p 5000:5000 alperunal92/rabbitmq-mail-consumer-server:rpi
```
For Docker-Compose

- latest
- rpi => ARM build for raspperry pi

```sh
$ docker-compose -f docker-compose-latest.yml up
or
$ docker-compose -f docker-compose-rpi.yml up
```

### Running Stages
You need to send messages from your server to rabbit mq channel when you need to send mail.
Forget Password Mail:
```sh
  rabbitMq.sendRabbitMQ('mailChannel', JSON.stringify({
    email: 'testmy-app@yandex.com',
    nameSurname: 'Alper ÜNAL',
    type: 'forget',
    appName: 'Test My App',
    forgetTitle: 'Forgot Your Password :(',
    forgetMessage: '<b>nameSurname</b> Forgot Your Password! Let's follow the steps below..',
    mailIcon: 'https://github.com/alperunal92/rabbitmq-mail-consumer-server/blob/master/images/5.png',
    webSiteLink: 'http://localhost:3000',
    webSiteLinkButton: 'Let's Start',
    warningText: 'If you did not send the password reset request, Please ignore it.',
    sincerelyText: 'With my best regards',
    needHelpText: 'Need Help?',
    needHelpLink: 'alper.unal92@hotmail.com',
  }));
```
Register Mail:
```sh
 rabbitMq.sendRabbitMQ('mailChannel', JSON.stringify({
    email: 'testmy-app@yandex.com',
    nameSurname: 'Alper ÜNAL',
    type: 'register',
    appName: 'Test My App',
    welcomeTitle: 'Welcome!',
    welcomeMessage: 'It's nice to see you among us <b> nameSurname </b> ! <br/>',
    mailIcon: 'https://github.com/alperunal92/rabbitmq-mail-consumer-server/blob/master/images/4.png',
    webSiteLink: 'http://localhost:3000',
    webSiteLinkButton: 'Let's Start',
    thanksText: 'Thank you for supporting our project!',
    sincerelyText: 'With my best regards',
    needHelpText: 'Need Help?',
    needHelpLink: 'alper.unal92@hotmail.com',
  }));
```


### Env Variables

| Env        | Example           
| ------------- |:-------------:
| NODE_ENV      | dev 
| RABBITMQ_URL   | amqp url      
| RABBITMQ_CHANNEL | amqp channel 
| MAIL_USER      | user mail 
| MAIL_PASS   | yser mail password      
| MAIL_HOST | smtp mail server
| MAIL_PORT      | smtp mail port 
| REDIS_HOST   | redis url      
| REDIS_PASS | redis password
| REDIS_PORT | redis port
| URL | unsubscribe url path
