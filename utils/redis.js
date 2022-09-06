const redis = require('redis')
const publisher = redis.createClient({
    url: process.env.REDIS_URL,
    socket: {
      tls: true,
      rejectUnauthorized: false
    }
  });

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}

exports.getSubscriber = (channel) => {
    const subscriber = redis.createClient({
        url: process.env.REDIS_URL,
        socket: {
          tls: true,
          rejectUnauthorized: false
        }
      });
    subscriber.subscribe(channel)
    return subscriber
}