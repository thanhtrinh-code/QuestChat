import React from 'react';

import UserCard from '@/components/cards/UserCard';

const Dashboard = () => {
  return (
    <div className="">
        <div>
            <UserCard
                id={1}
                name="Steve"
                imgUrl="/imgs/person.webp"
                age={28}
                location="Seattle, WA"
                occupation="President"
                funFact="The president" />
        </div>
        <div className="flex justify-between px-5">
            <button className="bg-green-400 txt-white rounded-lg p-3">Request</button>
            <button className="bg-red-400 txt-white rounded-lg p-3">Pass</button>
        </div>
    </div>
  );
}

export default Dashboard;