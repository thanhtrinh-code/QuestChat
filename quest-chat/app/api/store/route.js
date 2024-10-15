
import { NextResponse } from "next/server";
import {db} from '@/firebase';
import { doc, setDoc, collection } from "firebase/firestore";
const key = process.env.GOOGLE_API_KEY;
export async function POST(req, res) {
    try {
        const {userId, name, age, ethinicity, city, job, gender, emergency, hobby} = await req.json();
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${key}`
        )
        const data = await response.json();
        const location = data.results[0].geometry.location;

        const userRef = doc(collection(db, "user"), userId);

        await setDoc(userRef, {
            name,
            age,
            ethinicity,
            city,
            position: [location.lat, location.lng],
            job,
            gender,
            emergency,
            hobby,
            created_at: new Date(),
        }); // matching hobby

        
        return new NextResponse(JSON.stringify({
            message: "Data received successfully",
        }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({
            error: "Backend error in store file",
        }));
    }
}