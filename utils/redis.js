const redis = require('redis')

const { endpointUri, password } = require('../config').redis;
const publisher = redis.createClient(`redis://${endpointUri}`, {password});

exports.publishMessage = async (channel, message) => {
    await publisher.connect()
    publisher.publish(channel, message)
}

exports.getSubscriber = async (channel) => {
    const subscriber = redis.createClient(`redis://${endpointUri}`, {password});
    await subscriber.connect()
    subscriber.subscribe(channel)
    return subscriber
}