 Angular Project Trance Festivals worldwide 2019
 
 Small website containing information about trance music events all over the world.
 Using Angular for front-end, Kinvey as backend, Bootstrap, Toastr.
 
 Short info and functionalities:
 
 Components:
 Authentication module  - contains Login and Register components.
 Comments module  - contains components with logic and forms for adding comments;
 like, edit and delete comments for authenticated users.
 Fests module - contains components for add,edit and delete festivals.
 Landing module  - contains component displayed when a user has been blocked by Admin,
 and home component with info for the published festivals.
 Shared module - contains Header with posted public info and simple footer.
 Users module - contains components with info for every user area -user's comments and published info,
 all users - for admin users; admin functinalities for editing users' collection.
 Core module - Kinvey Appkey and Appsecret; guards; error interceptor and token interceptor;
 Models folder containiing models for collection creation and usage. Services folder - handling requests and authentication
 to database and responses as observables.
 
 
 Visitors:
 
 See the three most visited festivals on home page.
 On clicking review button, redirect to Login Page.
 
 Registered / Logged-in Users can:
 
 Add and/or edit new post for festivals
 Add and/or edit their comments below each post.
 Like other users' comments.
 Edit their own profile /the e-mail address/.
  View all published festivals sorted by name, by most liked or by most rated.
 
 
 Admin functionalities:
 
 Delete all posts
 Delete all comments
 Edit his profile
 Delete / Edit users
 Block  / Unblock selected users
 Admin role is implemented with Kinvey Admin role Id
 and permissions for all CRUD operations for database collections.

