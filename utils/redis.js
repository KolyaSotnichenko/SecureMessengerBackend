const redis = require('redis')
const publisher = redis.createClient(process.env.REDIS_URL)

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}

exports.getSubscriber = async (channel) => {
    const subscriber = redis.createClient(process.env.REDIS_URL)
    await subscriber.connect()
    subscriber.subscribe(channel)
    return subscriber
}