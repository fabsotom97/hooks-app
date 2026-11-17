import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <hr />

      <form className="flex flex-col gap-2 my-10">
        <Input
          type="number"
          placeholder="User ID"
        />
        <Button className="cursor-pointer" type="submit">Login</Button>
      </form>

      <Link to={'/about'}>
        <Button className='cursor-pointer' variant={'ghost'}>Return to main page</Button>
      </Link>
    </div>
  )
}
