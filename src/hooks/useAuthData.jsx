import { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'

const useAuthData = () => {

  const AUTH_KEY = 'authData';

  const { authData, setAuthData } = useContext(AuthContext);
  const [ isLoaded, setIsLoaded ] = useState(false);
  
  useEffect(() => {

    if (!isLoaded) {
      setIsLoaded(true);
      const cached = localStorage.getItem(AUTH_KEY);
      if (cached) {
        setAuthData(JSON.parse(cached));
      }
    }

  }, [ isLoaded, setAuthData ]);

  const setToken = token => {
    console.log('useAuthData: setToken(): token:', token);
    if (!token) {
      return;
    }
    const data = {
      token
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(data));
    setAuthData(data);
    setIsLoaded(true);
  }

  const clearToken = () => {
    localStorage.removeItem(AUTH_KEY);
    setAuthData({});
  }

  return {
    authData,
    isLoaded,
    setToken,
    clearToken
  }
}

export default useAuthData