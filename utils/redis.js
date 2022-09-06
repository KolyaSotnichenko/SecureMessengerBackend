const redis = require('redis')
const publisher = redis.createClient(process.env.REDIS_URL)

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}



exports.getSubscriber = (channel) => {
    const subscriber = redis.createClient({url: process.env.REDIS_URL})
    subscriber.connect()
    subscriber.subscribe(channel)
    return subscriber
}