"use client";
import Pusher from 'pusher-js';
import React, { useEffect, useState } from 'react'

const ChatsPage = () => {
  const [messages, setMessages] = useState([
    {
      role: 'user', message: 'sdjasldjklsadjkasldjaklsdjkalsdjas'
    },
    {
      role: 'user1', message: 'fdasmnfljasnflaksnflaksfnas'
    }
  ]);
  const [message, setMessage] = useState('');
  const [onlineUsersCount, setOnlineUsersCount] = useState(0);
  const [onlineUser, setOnlineUser] = useState([]);
  const [name, setName] = useState('');

  // const pusher = new Pusher();
  // useEffect(() => {
    
  // });
  return (
    <div className='w-[100%] h-full flex'>
      <form className="rounded-lg w-[80%] h-full bg-white shadow-2xl flex flex-col">
      <div className="flex flex-col h-full overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex m-2 items-start ${
              msg.role === 'user' ? 'justify-start' : 'justify-end'
            } gap-4`}
          >
            <div
              className={`rounded-lg px-4 py-2 ${
                msg.role !== 'user'
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-yellow-300 text-black'
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}

      </div>
      <div className="flex items-center justify-between w-full h-16 border-t border-gray-300 p-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button type='submit'
          className="ml-2 px-4 py-2 bg-amber-300 rounded-full hover:bg-amber-400 transition duration-200"
          
        >
          Send
        </button>
      </div>
      </form>

      <div className='w-[20%] bg-slate-500'>
      <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  )
}

export default ChatsPage;