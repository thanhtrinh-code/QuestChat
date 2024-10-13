"use client";

interface Props {
    requests: JSON;
}

const LeftSidebar = ({ requests }: Props) => {
    return (
        <section className="flex">
            <button className="border border-black w-100">FindMyFriends</button>
        </section>
    );
}

export default LeftSidebar;