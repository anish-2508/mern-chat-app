import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

  const [message, setMessage] = useState("")
  const{loading, sendMessage} = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) return;
    await sendMessage(message)
    setMessage("")
  }


  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type='text'
             className='border text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-white text-white'
             placeholder='Send a message...'
             value={message}
             onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
        {loading ? <div className='loading loading-spinner'></div> : <IoSend />}
        </button>
        </div>
        
    </form>
  )
}

export default MessageInput;



// import React from 'react'
// import { IoSend } from "react-icons/io5";


// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full'>
//             <input type='text'
//              className='border text-sm border-lg block w-full p-2.5 bg-gray-800 border-gray-white text-white'
//              placeholder='Send a message...'
//             />
//         </div>
//         <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//         <IoSend />
//         </button>
//     </form>
//   )
// }

// export default MessageInput

