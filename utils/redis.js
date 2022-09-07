const redis = require('redis')
var url = require('url');
// var redisURL = url.parse(process.env.REDISCLOUD_URL);
const publisher = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});
const subscriber = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});

(async () => {
    try {
        await publisher.connect()
        await subscriber.connect()
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