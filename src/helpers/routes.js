/*
We are going to do some magic here, if user is logged in redirect to this page

To do that we need 2 special functions in here:
    1) Check if user is logged in: if they are logged in and they happen to go to signin or signup page we redirect them to
    browse page. And that's what netflix uses on their website as well!
    2) 2nd function is protected routes. We want to protect the browse page from not-logged-in users and abstracting it here
    makes a lot of sense

To do this, we are going to be following recommendations from React Router. Their authentication documentation is good.
SEARCH FOR IT!

Doing this in this SEPARATE file has the added benefit that you can use this file to copy to other projects.

IsUserRedirect: if we have a user, they happen to go to signin or signup page, we redirect them to
another page(this page)
We pass in user to check if there is user

RESTPROPS
lets say you have a path or prop that you are passing to route in app.js with this:
<Route exact path="/signin">
We are going to exchange THAT(whatever prop/path you were passing to Route) with OUR component and we will spread
the rest of the props back to the <Route> with "...restProps"

USERCHECK
If there is no user we want to return the children
What does that mean exactly?
Well, we are checking for a user object. That means when we call this component we are going to have to pass down user object.

LOGGEDINPATH
if there is user we want to redirect them to loggedInPath
???
Now we can check for the logged in path. If we pass the path "/signin", which we can pass down with ...restprops statement, we don't have to specify
 the prop path, we will then use the loggedinPath to send them to that.
 So if they come in with path "/signin" and they ARE a user, we are going to redirect them to "/browse"
 But if they come in with path "/signin" and they ARE NOT a user we are going to return children, children will be the component page for signin


Conclusin:
If user logged in redirect to loggedInPath
If user not logged in render children which will be a component like SignIn or SignUp
"exact" from whereever this is called will be included in rest of the restProps and will be passed down to Route
???
*/

import {Redirect, Route} from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}

/**
 * If they are not logged in and they try access /browse page, lets reirect them to /signin page
 */
export function ProtectedRoute({ children, user, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return <Redirect to={{ pathname: 'signin', state: { from: location } }} />;
        }
        return null;
      }}
    />
  );
}
