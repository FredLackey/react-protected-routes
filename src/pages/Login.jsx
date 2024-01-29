import useAuthData from '../hooks/useAuthData'

const LoginPage = () => {

  const { authData } = useAuthData();

  return (
    <>
      <div className="card">
        <h3>Login</h3>
        {
          authData?.token && <a href="#">You are already logged in.</a>
        }
        {
          !authData?.token && <a href="/cb/0987654321">Click here to login.</a>
        }
      </div>
      <p className="read-the-docs">
        Drop me a note if you need a hand: <a href="mailto:fred.lackey@gmail.com">fred.lackey@gmail.com</a> | <a rel="author" href="https://fredlackey.com">fredlackey.com</a>
      </p>
    </>
  )
}

export default LoginPage