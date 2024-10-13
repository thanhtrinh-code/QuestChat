import {NextResponse} from 'next/server';
import {db} from '@/firebase';
import {doc, getDoc, collection, getDocs} from 'firebase/firestore';
const key = process.env.GOOGLE_API_KEY;
const radius = 5000; // 5 km
export async function GET(req, res) {
    try {
        /*const usersRef = collection(db, 'user');
        const usersSnapshot = await getDocs(usersRef);
        const users = usersSnapshot.docs.map(doc => doc.id);*/
        // 47.6061° N, 122.3328° W
        const latitude = 47.6061;
        const longitude = -122.3328;
        const type = 'restaurant';
        const category = 'restaurant';

        const response = await fetch(
            `${process.env.GOOGLE_BASE_URL}nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&keyword=${category}&key=${key}`
        );
        const data = await response.json();
        // Add your logic to filter and transform the data as needed
        const items = data.results.slice(0,3).map(place => ({
            id: place.place_id,
            name: place.name,
            address: place.vicinity,
            rating: place.rating,
            photos: place.photos?.map(photo => photo.photo_reference),
            website: place.website,
        }));

        return new NextResponse(JSON.stringify({
            items,
        }));

        
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({error: 'Failed to fetch users'}));
    }
}