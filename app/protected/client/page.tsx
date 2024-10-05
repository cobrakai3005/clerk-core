'use client'

import { useUser } from '@clerk/nextjs'

export default function Page() {
  const { user, isLoaded, isSignedIn } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }
  return (
    <div className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>Protected Client Page</h1>
        <p>Welcome {user?.firstName}</p>
      </div>
    </div>
  )
}
