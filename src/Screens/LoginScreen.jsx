import React, { useState } from 'react'
import { login } from '../service/AuthService';
import { useNavigate } from 'react-router-dom/dist';
import { paths } from '../routes/paths';

export default function LoginScreen() {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [AccountName, setAccountName ] = useState('');
  const navigate = useNavigate();

  const onSubmitClick = async ()=>{
    if (!email.length || !password.length || !AccountName.length){
      return alert('Email and password are required!');
    }
    const data = {
      email,
      password,
      account_name: AccountName
    }
    const { status, error, data:loginData } = await login(data);

    if ( !status ){
      return alert(error);
    }

    navigate(paths.DASHBOARD_PAGE);
  }

  const clearState = ()=>{
    setEmail('');
    setPassword('');
  }
  return (
    <div className='flex flex-col gap-3 border border-gray p-4 rounded-md w-1/5 mx-auto'>
        <h1 className='text-3xl'>Login</h1>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email">Email</label>
          <input className='h-8 px-2' type="email" value={email} onChange={(e)=>{ setEmail(e.target.value)}}/>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="password">Password</label>
          <input className='h-8 px-2' type="password" value={password} onChange={(e)=>{ setPassword(e.target.value)}}/>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="Account">Account Name</label>
          <input className='h-8 px-2' type="text" value={AccountName} onChange={(e)=>{ setAccountName(e.target.value)}}/>
        </div>

        <button onClick={onSubmitClick} type='button' className='px-4 h-8 bg-sky-400 hover:bg-sky-600'>Submit</button>
    </div>
  )
}
