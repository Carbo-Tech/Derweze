import { signOut, useSession } from 'next-auth/react'

export default function IndexPage() {
  const session = useSession()
  console.log(session)


  return (
    <div>
      <h1>Welcome to my app</h1>
      {session ? (
        <div>
          <p>Hello,{session.data?.user?.business_name} </p>
          <p>This is some data you can only see if you're authenticated</p>
          <button onClick={signOut}>Signout</button>
        </div>

      ) : (
        <p>Please sign in to see protected data</p>
      )}

    </div>
  )
}
