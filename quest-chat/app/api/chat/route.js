import {NextResponse} from 'next/server';
import Pusher from 'pusher';

const pusher = new Pusher({
    appId: "1879347",
    key: "174980338da06c1bd08e",
    secret: "2df26e4bf27186bc6319",
    cluster: "us3",
    useTLS: true
  });
  export async function POST(req) {
    try {
        const { name, message } = await req.json();
        
    
        await pusher.trigger('chat', 'new_message', {
            name,
            message
        });

        return new NextResponse(JSON.stringify({
            message: "Data received successfully",
        }))
    } catch (error) {
        console.error('Error in chat backend:', error);
        return NextResponse.json({ error: 'Error in chat backend' }, { status: 400 });
    }
}