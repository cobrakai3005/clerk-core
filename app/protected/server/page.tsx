import { currentUser } from '@clerk/nextjs/server'

export default async function Page() {
  const user = await currentUser()
  return (
    <div className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>Protected Server Page</h1>

        <p>Welcome {user?.firstName}</p>
      </div>
    </div>
  )
}
