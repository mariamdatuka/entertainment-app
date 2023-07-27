import { Link } from "react-router-dom"
import icon from '../assets/movie.svg'

const SignUp = () => {
  return (
    <>
    <section className='flex flex-col items-center justify-center gap-7 h-screen'>
        <img src={icon} alt='icon'/> 
      <main className='w-80 bg-[var(--color-semidark-blue)] p-4 rounded-md flex flex-col gap-2 items-start'>
           <h1 className='text-3xl'>Sign Up</h1>
           <form className='flex flex-col w-full gap-3 pt-4'>
              <input className='w-full border-b border-b-slate-400 bg-transparent py-3 placeholder:text-base' placeholder='Email Address'type='email'/>
              <input className='w-full border-b border-b-slate-400 bg-transparent py-3 placeholder:text-base'placeholder='Password' type='password'/>
              <input className='w-full border-b border-b-slate-400 bg-transparent py-3 placeholder:text-base'placeholder='Repeat Password' type='password'/>
              <button className='text-center mt-5 btn' type='submit'>Create an account</button>
           </form>
           <div className='flex items-center justify-center gap-2 self-center mt-2'>
              <p>Have an account?</p>
              <Link className='text-[var(--color-dark-red)]'to='/'>Login</Link>
           </div>
       </main>
    </section>  
    </>
  )
}

export default SignUp