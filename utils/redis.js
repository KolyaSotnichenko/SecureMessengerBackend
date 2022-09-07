const redis = require('redis')

const { endpointUri, password } = require('../config').redis;
const publisher = redis.createClient(`redis://${endpointUri}`, {password});
const subscriber = redis.createClient(`redis://${endpointUri}`, {password});

(async () => {
    try {
        await publisher.connect()
        await subscriber.connect()
    } catch (error) {
        console.log('error while connecting redis', error)
    }
})

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}

exports.getSubscriber = (channel) => {
    subscriber.subscribe(channel)
    return subscriber
}