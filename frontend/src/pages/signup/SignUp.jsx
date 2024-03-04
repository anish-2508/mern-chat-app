import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {

    const [inputs, setInputs]= useState({
        fullName : '',
        username : '',
        password : '',
        confirmPassword : '',
        gender : '',
    })

    const {loading, signup} = useSignUp()   

    const handleGenderCheckbox = (gender) =>
    {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async(e) =>
    {
        e.preventDefault()
        await signup(inputs)
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto overflow-hidden'>
        <div className='w-full p-6 rounded-lg shadow-md bg-black bg-clip-padding backdrop-filter'>
        <h1 className='text-3xl font-semibold text-center text-white'>
                Sign Up
                <span className='text-purple-400'> ChatApp</span>
            </h1>
            <form className='p5' onSubmit={handleSubmit}>
                <div className=' px-4 pt-4 pb-2'>
                    <label className='label p-2'>
                        <span className='text-base label-text'>
                            Full Name
                        </span>
                    </label>
                    <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10'
                    value={inputs.fullName}
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    ></input>
                </div>
                <div className=' px-4 pt-4 pb-2'>
                    <label className='label p-2'>
                        <span className='text-base label-text'>
                            Username
                        </span>
                    </label>
                    <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'
                    value={inputs.username}
                    onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    ></input>
                </div>

                <div className='px-4 pb-7 pt-4'>
                    <label className='label'>
                        <span className='text-base label-text'>
                            Password
                        </span>
                    </label>

                        <input 
                        type='password' 
                        placeholder='Enter Password' 
                        className='w-full input input-bordered h-10'
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
                </div>

                <div className='px-4 pb-7'>
                    <label className='label'>
                        <span className='text-base label-text'>
                            Confirm Password
                        </span>
                    </label>

                        <input 
                        type='password' 
                        placeholder='Confirm Password' 
                        className='w-full input input-bordered h-10'
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
                </div>

                <GenderCheckBox onCheckboxChange= {handleGenderCheckbox} selectedGender= {inputs.gender}/>

                <div>
                    <button className='btn mt-2 ml-4'
                    disabled= {loading}
                    >
                        {loading ? <span className='loading loading-spinner'></span> : "SignUp"}
                    </button>
                </div>

                <Link to='/login' className='text-sm hover:underline hover:text-purple-400 mt-2 inline-block p-5'>
                    Already have an account ?
                </Link>
            </form>
        </div>
     
    </div>
  )
}

export default SignUp
