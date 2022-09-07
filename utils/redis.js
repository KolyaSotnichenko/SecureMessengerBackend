const redis = require('redis')

const { endpointUri, password } = require('../config').redis;
const publisher = redis.createClient(`redis://${endpointUri}`, {password});

await publisher.connect()

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}

exports.getSubscriber = async (channel) => {
    const subscriber = redis.createClient(`redis://${endpointUri}`, {password});
    await subscriber.connect(s)
    subscriber.subscribe(channel)
    return subscriber
}