"use client"
import React, { useState } from 'react'

const ChatsPage = () => {
  const [messages, setMessages] = useState({
    user: ['Hello', 'How are you?', 'I am fine'],
    other: ['Hi', 'I am also fine', 'What about you?'],
  });
  const [message, setMessage] = useState('');
  return (
    <div className='w-[100%] h-full flex'>
      <div className='w-[80%] bg-red-300'>

      </div>
      <div className='w-[20%] bg-slate-500'>

      </div>
    </div>
  )
}

export default ChatsPage;