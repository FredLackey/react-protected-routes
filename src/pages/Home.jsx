import useAuthData from '../hooks/useAuthData'
import ChildComponent from '../components/ChildComponent'

const HomePage = () => {

  const { authData, setToken, clearToken } = useAuthData();

  const toggle = () => {
    if (authData?.token) {
      clearToken();
    } else {
      setToken('ABC123');
    }
  }

  return (
    <>
      <div className="card">
        <button onClick={toggle}>
          {authData?.token ? 'Logout' : 'Login'}
        </button>
        <p>
          {authData?.token ? 'You are logged in' : 'You are logged out'}
        </p>
      </div>
      <p className="read-the-docs">
        Drop me a note if you need a hand: <a href="mailto:fred.lackey@gmail.com">fred.lackey@gmail.com</a> | <a rel="author" href="https://fredlackey.com">fredlackey.com</a>
      </p>
      <ChildComponent />
    </>
  )
}

export default HomePage