import { Link } from 'react-router-dom'
import icon from '../assets/movie.svg'

const Homepage = () => {
  return (
    <>
    <section className='flex flex-col items-center justify-center gap-7 h-screen'>
        <img src={icon} alt='icon'/> 
      <main className='w-80 bg-[var(--color-semidark-blue)] p-4 rounded-md flex flex-col gap-2 items-start'>
           <h1 className='text-3xl'>Login</h1>
           <form className='flex flex-col w-full gap-3 pt-4'>
              <input className='w-full border-b border-b-slate-400 bg-transparent py-3 placeholder:text-base' placeholder='Email Address'/>
              <input className='w-full border-b border-b-slate-400 bg-transparent py-3 placeholder:text-base'placeholder='Password'/>
              <button className='text-center mt-5 btn'>Login to your account</button>
           </form>
           <div className='flex items-center justify-center gap-2 self-center mt-2'>
              <p>Don't have an account?</p>
              <Link className='text-[var(--color-dark-red)]'to='/signup'>Sign up</Link>
           </div>
       </main>
    </section>  
    </>
  )
}

export default Homepage