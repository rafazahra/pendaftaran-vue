module.exports = {
    Host: "localhost",
    USER: "rafa",
    PASSWORD: "1234",
    DB: "pendaftaran",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
};