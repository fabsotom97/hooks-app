import { use, type Usable } from "react";
import type { User } from "./actions/get-user.action";

interface ClientInformationProps {
    getUser: Usable<User>,
}

export const ClientInformation = ({ getUser }: ClientInformationProps) => {

    const user = use(getUser);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h2 className="text-4xl font-thin text-white">{user.name}</h2>
            <p className="text-white text-2xl">{user.location}</p>
            <p className="text-white text-xl">{user.role}</p>
        </div>
    )
}
