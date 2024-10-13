"use client";

import { useRouter } from "next/navigation";

interface Props {
    requests: JSON;
}

const LeftSidebar = ({ requests }: Props) => {
    const router = useRouter();
    const handleNavigation = (path: string) => {
        router.push(path);
      };
      return (
        <section className="bg-yellow-200 flex flex-col w-1/5">
          <button className="w-full p-3 rounded-lg hover:bg-yellow-300" onClick={() => handleNavigation("/dashboard")}>
            FindMyFriends
          </button>
          <button className="w-full p-3 rounded-lg hover:bg-yellow-300" onClick={() => handleNavigation("/dashboard/requests")}>
            Requests
          </button>
          <button className="w-full p-3 rounded-lg hover:bg-yellow-300" onClick={() => handleNavigation("/dashboard/chats")}>
            Chats
          </button>
        </section>
    );
}

export default LeftSidebar;