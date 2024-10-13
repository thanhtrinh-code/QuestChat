import React from 'react';

import UserCard from '@/components/cards/UserCard';

const Dashboard = () => {
  return (
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
  );
}

export default Dashboard;