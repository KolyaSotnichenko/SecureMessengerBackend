const redis = require('redis')

const publisher = redis.createClient(process.env.REDISCLOUD_URL);
const subscriber = redis.createClient(process.env.REDISCLOUD_URL);

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

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}

exports.getSubscriber = (channel) => {
    subscriber.subscribe(channel)
    return subscriber
}