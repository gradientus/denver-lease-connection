// module.exports = app => {


//     const authCheck = (req, res, next) => {
//         if (!req.user) {
//             //if user is not logged in
//             res.redirect('/auth/login');
//         } else {
//             //if logged in
//             next();
//         }
//     };

//     //TODO: direct new users to a page to select their role - landlord or future tenant @ '/newUser'
//     //for now they will be sent to the listings page

//     app.get('/landlordList', authCheck, (req, res) => {
//         res.redirect('/landlordList');
//     })


// };