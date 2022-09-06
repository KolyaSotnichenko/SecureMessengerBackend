const redis = require('redis')
const publisher = redis.createClient(process.env.REDIS_URL)

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}



exports.getSubscriber = async (channel) => {
    const subscriber = redis.createClient({url: process.env.REDIS_URL, legacyMode: true})
    subscriber.connect()
    await subscriber.v4.set('key', 'value', {
        NX: true
    });
    subscriber.subscribe(channel)
    return subscriber
}