import { useAuth0 } from '@auth0/auth0-react'

const ProfilePage = (props) => {

  const { isAuthenticated, user } = useAuth0()

  const authenticatedPage = (
    <div className='basket_header'>
      <h1>{user.name}</h1>
      <h2>{user.sub}</h2>
      <h2>{user.email}</h2>
    </div>
  )

  const unathenticatedPage = (
    <h1>Please Log In</h1>
  )

  return (
    <>
      {isAuthenticated ? authenticatedPage : unathenticatedPage}
    </>
  )
}

export default ProfilePage