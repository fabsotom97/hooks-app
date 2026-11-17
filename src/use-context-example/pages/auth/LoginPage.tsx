import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "@/use-context-example/context/UserContext";
import { toast } from "sonner";

export const LoginPage = () => {

  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState('');
  const navigation = useNavigate();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userId.trim().length === 0) return;
    const userFound = login(Number.parseInt(userId.trim()));
    if (!userFound) {
      toast.error('User not found');
      return;
    }
    navigation('/profile');
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <hr />

      <form className="flex flex-col gap-2 my-10"
        onSubmit={handleSubmit}
      >
        <Input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(evt) => setUserId(evt.target.value)}
        />
        <Button className="cursor-pointer" type="submit">Login</Button>
      </form>

      <Link to={'/about'}>
        <Button className='cursor-pointer' variant={'ghost'}>Return to main page</Button>
      </Link>
    </div>
  )
}
