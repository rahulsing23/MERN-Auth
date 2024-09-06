import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice';
import {useDispatch, useSelector} from 'react-redux'





const SignIn = () => {
  
  const [formData, setformData] = useState({});
  // const [Loading, setLoading] = useState(false);
  // const [Error, setError] = useState(false);

  const { loading, error} = useSelector((state) =>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const handleChange = (e) =>{

    setformData({...formData, [e.target.id]: e.target.value})

  }

  const handleSubmit = async (e) =>{

    e.preventDefault();
    try{
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
      })
      const data = await res.json();
     
     
      if(data.success === false)
      {
      dispatch(signInFailure(data))
        return ;
      }
      dispatch(signInSuccess(data))
      navigate('/')
    }
    catch(error)
    {
      dispatch(signInFailure(error))
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl my-7 text-center font-semibold'>Sign In</h1>
      <form className='flex flex-col  gap-4' onSubmit={handleSubmit}>
        
        <input type='email' placeholder='Email' id='email' className=' bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='password' placeholder='Password' id='password' className=' bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} type='submit' className='bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>
        {
          loading ? 'Loading...':'Sign In'
        }
        </button>
      </form>
      <div className="flex  gap-2 mt-5  justify-center ">
       <p>Create new account? </p> 
       <Link to='/sign-up'>
       <span className='text-blue-500'>Sign Up</span>
       </Link>
       
      </div>
      <p hidden={!error} className='text-red-700 mt-5 bg-red-100 p-2'>{error ? error.message || 'Something went wrong': ""}</p>
    </div>
  )
}

export default SignIn
