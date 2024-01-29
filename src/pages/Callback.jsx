import useAuthData from '../hooks/useAuthData'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const SUCCESS_URL = '/dashboard';

const CallbackPage = () => {

  const { authData, setToken } = useAuthData();
  const { jwt } = useParams();

  useEffect(() => {

    const handleCallback = async () => {

      if (!jwt) {
        console.debug('CallbackPage: no token');
        return;
      }
      if (jwt === authData?.token) {
        console.debug('CallbackPage: duplicate token');
        return;
      }
      await setToken(jwt);
      window.location.href = SUCCESS_URL;
          
    };

    handleCallback();

  }, [jwt, authData, setToken]);

  return (
    <div className="card">
      Loading...
    </div>
  )
}

export default CallbackPage