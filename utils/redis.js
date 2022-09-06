const redis = require('redis')
const publisher = redis.createClient(process.env.REDIS_URL)
const subscriber = redis.createClient(process.env.REDIS_URL)

await subscriber.connect()

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}



exports.getSubscriber = (channel) => {
    
    subscriber.subscribe(channel)
    return subscriber
}