import useAuthData from '../hooks/useAuthData'

const ChildComponent = () => {

  const { authData } = useAuthData();

  return (
    <p>
      Token: {authData?.token || '(not set)'}
    </p>
  )
}

export default ChildComponent