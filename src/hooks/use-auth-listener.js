import {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from '../context/firebase';

export default function useAuthListener() {
  /**
     * With this we can check to see if there is user in localstorage which means we have to store the user state
       on any particular action: whether they log in or log out in the local storage.
       Secondly, we have to use context so we can get Firebase out of there.
       So we can listen to Firebase on authentication state change

     The reason why we setUser(authUser) after we store it in localStorage is that i want access to user object
     because I know it has the profile name in there, or the first name at least.
     That means i can potentially use that for the profile.
     Or when the user goes to the browse page you can say hello Karl, hello John and we can just use the first name.
     It is nice that we can destructure out the user from this authListener if we need that content
     */
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        /**
         * When you put items into localStorage you stringify, when you pull out you parse them
         */
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // if we don't have authUser
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });
    // to clean up listener in React: This prevents unmounting, "this component hasn't unmounted"
    // READ about how listeners can affect react, what errors can be caused when you have multiplex components touching
    // one another or at least transitioning from one page to another. So you have to make sure that this gets cleaned up.
    return () => listener();
  }, [firebase]);

  return { user };
}
