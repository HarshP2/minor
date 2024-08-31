const fs = require('fs');
const path = require('path');
const User = require('../modals/users')



// get the sign up data
module.exports.create = function(req, res)
{

    console.log("inside create of users_controller");
    console.log(req.body);

    // Check if passwords match
    if (req.body.password !== req.body.confirmPassword) {
        console.log("Passwords do not match");

        // Redirect back to signup page with user data (excluding passwords)
        const queryParams = new URLSearchParams({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            // Add any other fields you need
        }).toString();

        return res.redirect(`/signup?${queryParams}`);
}
    // User.findOne({email: req.body.email}, function(err, user)
    // {
    //     if(err)
    //     {
    //         console.log('Error in finding user in signing up'); 
    //         return;
    //     }

    //     if (!user)
    //     {
    //         User.create(req.body, function(err, user)
    //         {
    //             if(err)
    //             {
    //                 console.log('Error in creating user while signing up', err); 
    //                 return;
    //             }else{
    //                 // write the code
    //             console.log("user created successfully")
                    
    //             return res.redirect('/login');
    //             }
                
    //         }
        
    //               );User.save()
    //     }
        
    // });
}