require('dotenv').config();

const sanitizeRedisUrl = url => url.replace(/^(redis\:\/\/)/, '');

const { REDISCLOUD_URL, REDIS_HOST, REDIS_PORT, REDIS_PASSWORD, PORT } = process.env;

module.exports = {
    redis: {
        endpointUri: REDISCLOUD_URL
            ? sanitizeRedisUrl(REDISCLOUD_URL)
            : `${sanitizeRedisUrl(REDIS_HOST)}:${REDIS_PORT}`,
        password: REDIS_PASSWORD || undefined
    },
    app: {
        port: PORT || 3000
    }
};