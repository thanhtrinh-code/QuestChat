"use client";

import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
    id: number;
    name: string;
    imgUrl: string;
    age: number;
    location: string;
    occupation: string;
    funFact: string;
}

const UserCard = ({ id, name, imgUrl, age, location, occupation, funFact }: Props) => {
    // const router = useRouter();
    return (
        <section className="border border-black w-96 mx-auto">
            <h1>{name}</h1>
            <div className="flex">
                <Image
                    src={imgUrl}
                    alt="Profile picture"
                    width={200}
                    height={200}
                />
                <div>
                    <ul>
                        <li>{age}</li>
                        <li>{location}</li>
                        <li>{occupation}</li>
                    </ul>
                </div>
            </div>
            <p>{funFact}</p>
        </section>
    );
}

export default UserCard;