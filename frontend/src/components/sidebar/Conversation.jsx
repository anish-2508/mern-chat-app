import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext'


const Conversation = ({conversation, lastIdx}) => {

const {selectedConversation, setSelectedConversation} = useConversation()

const isSelected = selectedConversation?._id === conversation._id
const {onlineUsers} = useSocketContext()
const isOnline = onlineUsers.includes(conversation._id)


  return (
   <>
    <div className={`flex gap-2 items-center hover:bg-sky200 rounded p-2 py-1 cursor-pointer
    ${isSelected ? "bg-sky-900" : ""}`}
    onClick={() => setSelectedConversation(conversation)}
    >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic}  alt= "use avatar"/>
            </div>
        </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                    
                </div>
            </div>

    </div>

   {!lastIdx &&  <div className='divider my-0 py-0 h-1'/>}
   
   </>
  )
}

export default Conversation









// import React from 'react'

// const Conversation = () => {
//   return (
//    <>
//     <div className='flex gap-2 items-center hover:bg-sky200 rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar-online'>
//             <div className='w-12 rounded-full'>
//                 <img src="https://img.freepik.com/premium-psd/brown-beaver-with-white-background-with-brown-beaver-front_176841-19600.jpg"  alt= "use avatar"/>
//             </div>
//         </div>

//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-3 justify-between'>
//                     <p className='font-bold text-gray-200'>Capybara</p>
//                     <span className='text-xl'>🌷</span>
//                 </div>
//             </div>

//     </div>

//     <div className='divider my-0 py-0 h-1'/>
   
//    </>
//   )
// }

// export default Conversation
