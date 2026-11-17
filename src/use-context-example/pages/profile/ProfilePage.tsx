import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { UserContext } from "@/use-context-example/context/UserContext";

export const ProfilePage = () => {

  const { user, logout } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">User's Profile</h1>
      <hr />
      <div className="w-[80%]">
        <pre className="my-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>

      <Button className='cursor-pointer'
        variant='destructive'
        onClick={logout}>
        Logout
      </Button>
    </div>
  )
}
