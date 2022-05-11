import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase';
import { loginUser } from '../redux/auth/actions';

const useUserState = () => {
  const dispatch = useDispatch();

  const [hasSessionActive, setHasSessionActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        const { uid, displayName } = user;

        dispatch(loginUser(uid, displayName));
        setHasSessionActive(true);
      } else {
        setHasSessionActive(false);
      }

      setLoading(false);
    });
  }, []);

  return {
    hasSessionActive,
    loading,
  };
};

export default useUserState;
