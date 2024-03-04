import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {loading, login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-black bg-clip-padding backdrop-filter'>
            <h1 className='text-3xl font-semibold text-center text-white'>
                Login
                <span className='text-purple-400'> ChatApp</span>
            </h1>
            <form className='p5' onSubmit={handleSubmit}>
                <div className=' px-4 pt-4 pb-2'>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>        
                    </label>
                    <input type='text' placeholder='Enter Username' 
                    className='w-full input input-bordered h-10'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    ></input>

                </div>

                <div className='px-4 pb-7'>
                    <label className='label'>
                        <span className='text-base label-text'>
                            Password
                        </span>
                    </label>

                        <input 
                        type='password' 
                        placeholder='Enter Password' 
                        className='w-full input input-bordered h-10'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <button className='btn mt-2 ml-4'
                    disabled= {loading}
                    >
                    {loading ? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </div>

                <Link to='/signup' className='text-sm hover:underline hover:text-purple-400 mt-2 inline-block p-5'>
                    {"Don't"} have an account ?
                </Link>
            </form>

        </div>
        
    </div>
  )
}

export default Login



// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-black bg-clip-padding backdrop-filter'>
//             <h1 className='text-3xl font-semibold text-center text-white'>
//                 Login
//                 <span className='text-purple-400'> ChatApp</span>
//             </h1>
//             <form className='p5'>
//                 <div className=' px-4 pt-4 pb-2'>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>        
//                     </label>
//                     <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'></input>

//                 </div>

//                 <div className='px-4 pb-7'>
//                     <label className='label'>
//                         <span className='text-base label-text'>
//                             Password
//                         </span>
//                     </label>

//                         <input 
//                         type='password' 
//                         placeholder='Enter Password' 
//                         className='w-full input input-bordered h-10'/>
//                 </div>

//                 <div>
//                     <button className='btn btn-sm mt-2 ml-4'>Login</button>
//                 </div>

//                 <a href='#' className='text-sm hover:underline hover:text-purple-400 mt-2 inline-block p-5'>
//                     {"Don't"} have an account ?
//                 </a>
//             </form>

//         </div>
        
//     </div>
//   )
// }

// export default Login
