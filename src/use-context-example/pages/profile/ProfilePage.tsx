import { Button } from "@/components/ui/button";

export const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">User's Profile</h1>
      <hr />
      <pre className="my-4">
        {JSON.stringify({}, null, 2)}
      </pre>

      <Button className='cursor-pointer' variant='destructive'>Logout</Button>
    </div>
  )
}
