module.exports = {
    MONGO_URL: 'mongodb://root:example@localhost:27018',
    JWT_TOKEN: 'YjZkMGViMjJmYTFiMTRhZTliMGRiMzc0',
    mailer: {
        server: {
            port: 25,
            host: "localhost",
            secure: false,
        },
        defaults: {
            from: 'Example Server <noreply@mailer.com>'
        }
    }
}
