"use client";

interface Props {
    user: string;
}

const HeaderBar = ({user}: Props) => {
    return (
        <header>
            <h1>QuestChat</h1>
            <p>{user}</p>
        </header>
    );
}

export default HeaderBar;