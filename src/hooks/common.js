import { useContext, useEffect } from 'react';
import { UserContext } from '../context';

export function useRemoveError() {
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    dispatch({
      type: 'SET_ERROR',
      error: null,
    });
  }, [dispatch]);
}

export const foo = '';
