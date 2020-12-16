/**
 *
 * @param target
 * films or series. we can ask for both. This helps us split content cleanly: here are your films, here are your
 *     series.
 * We need it because we don't want to render all the films with all the series. We want to split them and allow the
 *     user to choose.
 * So with target we are going to ask for either all series or all films. We could just display it, but I need the docid
 *     because I am going to use that unique id to allow us to have a key on each item. That's very react specific.
 */

import {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((error) => {
      });
  }, [firebase, target]);

  return { [target]: content };
}
