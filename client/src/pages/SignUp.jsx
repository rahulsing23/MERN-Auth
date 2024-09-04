import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const SignUp = () => {
  
  const [formData, setformData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  const handleChange = (e) =>{

    setformData({...formData, [e.target.id]: e.target.value})
    console.log(formData);
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      setLoading(true)
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
      })
      const data = await res.json();
      console.log(data)
      setLoading(false);
      if(data.success === false)
      {
        setError(true);
        return ;
      }
    }
    catch(error)
    {
      setLoading(false);
      setError(true);
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl my-7 text-center font-semibold'>Sign Up</h1>
      <form className='flex flex-col  gap-4' onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' id='username' className=' bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='email' placeholder='Email' id='email' className=' bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='password' placeholder='Password' id='password' className=' bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={Loading} type='submit' className='bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>
        {
          Loading ? 'Loading...':'Sign Up'
        }
        </button>
      </form>
      <div className="flex  gap-2 mt-5  justify-center ">
       <p>Already have an account? </p> 
       <Link to='/sign-in'>
       <span className='text-blue-500'>Sign In</span>
       </Link>
       
      </div>
      <p hidden={!Error} className='text-red-700 mt-5 bg-red-100 p-2'>{Error && 'Something went wrong'}</p>
    </div>
  )
}

export default SignUp
