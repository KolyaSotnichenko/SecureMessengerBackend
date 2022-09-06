const redis = require('redis')
const publisher = redis.createClient(process.env.REDIS_URL)

await publisher.connected()

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}

exports.getSubscriber = (channel) => {
    const subscriber = redis.createClient(process.env.REDIS_URL)
    subscriber.subscribe(channel)
    return subscriber
}