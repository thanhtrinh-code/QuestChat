"use client";

interface Props {
    user: string;
}

const HeaderBar = ({user}: Props) => {
    return (
        <header className="bg-yellow-200 h-20 flex items-center">
            <div className="w-3/5 flex justify-between mx-auto items-center">
                <h1 className="text-5xl m-0">QuestChat</h1>
                <p className="text-3xl m-0">Minji Kim</p>
            </div>
        </header>
    );
}

export default HeaderBar;