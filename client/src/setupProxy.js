const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(proxy(["/api", "/auth/google"], { target: "http://localhost:3210" }));
    app.use(proxy(["/api", "/auth/logout"], { target: "http://localhost:3210" }));
};