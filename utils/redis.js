const redis = require('redis')

const { endpointUri, password } = require('../config').redis;
const publisher = redis.createClient(`redis://${endpointUri}`, {password});

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}

exports.getSubscriber = (channel) => {
    const subscriber = redis.createClient(`redis://${endpointUri}`, {password});
    subscriber.subscribe(channel)
    return subscriber
}