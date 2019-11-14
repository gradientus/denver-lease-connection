const passport = require("passport");

module.exports = app => {
    //get the request from the client, authenticate with Google using passport.
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            //get user's profile and email address
            scope: ["profile", "email"]
        })
    );

    //callback route for Google to redirect to    

    app.get("/auth/google/callback", passport.authenticate('google'), (req, res) => {
        //res.send(req.user);
        res.redirect("/landlordList")
    });


    //route for logging out
    app.get("/auth/logout", (req, res) => {
        req.logout();
        //res.send(req.user);
        res.redirect("/")
    });

    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    });
};