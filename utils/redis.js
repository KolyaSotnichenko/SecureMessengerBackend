const redis = require('redis')
const publisher = redis.createClient([process.env.REDIS_URL, {legacyMode: true}])

publisher.on('error', function(err) {
    console.log('*Redis Client Error: ' + err.message)
})

publisher.on('connect', function(){
    console.log('Connected to redis instance');
})


exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}

exports.getSubscriber = (channel) => {
    const subscriber = redis.createClient([process.env.REDIS_URL, {legacyMode: true}])
    subscriber.on('error', function(err) {
        console.log('*Redis Client Error: ' + err.message)
    })
    
    subscriber.on('connect', function(){
        console.log('Connected to redis instance');
    })
    
    subscriber.subscribe(channel)
    return subscriber
}