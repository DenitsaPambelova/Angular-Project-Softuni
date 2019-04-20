Angular Project Trance Festivals worldwide 2019
 
 Small website containing information about trance music events all over the world.
 Using Angular for front-end, Kinvey as backend; Bootstrap; Toastr.
 
 Short info and functionalities:
 
 Components:
 
 - Authentication module  - contains Login and Register components.
 - Comments module  - contains components with logic and forms for add,edit,delete comments;
 - Fests module - contains components for add,edit and delete festivals.
 - Landing module  - contains component displayed when a user has been blocked by Admin,
 and home component with info for the published festivals.
 - Shared module - contains Header with public area info and simple text footer.
 - Users module - contains components with info for every user area - own comments and published info,
    all users - accessible for admin users; admin functionalities for editing users' collection.
 - Core module - Contains: Kinvey Appkey and Appsecret; Auth guard; Error interceptor and token interceptors;
   Models folder containing interfaces. 
 - Services folder - auth service and handling calls to database using Observables.
 
 
 Visitors:
 
 Can see most visited festivals on home page.
 On clicking review button, redirect to Login Page.
 
 Registered / Logged-in Users can:
 
 Add and/or edit new post for festivals
 Add and/or edit their comments below each post.
 Like other users' comments.
 Edit their own profile - the e-mail address.
 View published festivals by all users.
 
 
 Admin functionalities:
 
 Delete all posts
 Delete all comments
 Delete / Edit users
 Block  / Unblock selected users.
 Admin role is implemented with Kinvey role Id.
