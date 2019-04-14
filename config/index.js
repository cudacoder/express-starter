module.exports = {
    MONGO_URL: 'mongodb://admin:c00lpass@localhost:27017',
    JWT_TOKEN: 'YjZkMGViMjJmYTFiMTRhZTliMGRiMzc0',
    mailer: {
        server: {
            port: 25,
            host: "localhost",
            secure: false,
        },
        defaults: {
            from: 'NFL Mailer <noreply@mailer.com>'
        }
    }
}