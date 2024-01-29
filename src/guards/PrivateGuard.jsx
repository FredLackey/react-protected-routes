import useAuthData from '../hooks/useAuthData'
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react'

const LOGIN_URL = 'http://localhost:3102/login/4A60C3AB9A784D67B4564DD595E45FA5';

const PrivateGuard = () => {

  const { authData, isLoaded } = useAuthData();

  useEffect(() => {
    if (!isLoaded) {
      console.log('PrivateGuard: useAuthData loading');
      return;
    }
    if (!authData?.token) {
      console.log('PrivateGuard: useAuthData LOGGED OUT');
      console.log('PrivateGuard: useAuthData redirecting to login');
      window.location.href = LOGIN_URL;
      return;
    }
    console.log('PrivateGuard: useAuthData LOGGED IN');
  }, [isLoaded, authData])

  return (
    (isLoaded && authData?.token)
      ? <Outlet />
      : <div>Loading...</div>
  )
}

export default PrivateGuard