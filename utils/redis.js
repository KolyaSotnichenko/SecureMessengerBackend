const redis = require('redis')

const publisher = redis.createClient({ url: process.env.REDISCLOUD_URL}, {no_ready_check: true});
const subscriber = redis.createClient({url: process.env.REDISCLOUD_URL}, {no_ready_check: true});

(async () => {
    try {
        await publisher.connect()
        await subscriber.connect()
        console.log("ok")
    } catch (error) {
        console.log('error while connecting redis', error)
        console.log('REDISCLOUD_URL: ', process.env.REDISCLOUD_URL)
    }
})()

exports.publishMessage = async (channel, message) => {
    await publisher.publish(channel, message)
}

exports.getSubscriber = async (channel) => {
    await subscriber.subscribe('channel', channel)
    return subscriber
}