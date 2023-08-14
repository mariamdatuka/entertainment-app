import { Link } from "react-router-dom"
import icon from '../assets/movie.svg'
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'
import { userData } from "../../types"

const SignUp = () => {
const schema=yup.object().shape({
  avatar:yup.mixed().test('fileRequired', 'Please upload a photo', (value) => {
    if (value) return true;
    return false;
  }),
  email:yup.string().required('required'),
  password:yup.string().required('required'),
})

const{register,handleSubmit,formState:{errors}}=useForm({
  resolver: yupResolver(schema),
  defaultValues:{
    password:'',
    email:'',
    avatar:'',
  }
})

const onSubmit = async (data:userData) =>{
    const formData = new FormData();
    formData.append('avatar', data.avatar[0]);
    formData.append('email', data.email);
    formData.append('password', data.password);
  try {
    const response = await axios.post('https://entertainment-web.onrender.com/api/user/signup', formData);
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
}
 
  return (
    <>
    <section className='flex flex-col items-center justify-center gap-7 h-screen'>
        <img src={icon} alt='icon'/> 
      <main className='w-80 bg-[var(--color-semidark-blue)] p-4 rounded-md flex flex-col gap-2 items-start'>
           <h1 className='text-3xl'>Sign Up</h1>
           <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full gap-3 pt-4'>
               <div className='w-full flex flex-col gap-1'>
                  <input {...register('email')} className='focus:outline-none w-full border-b border-b-slate-400 bg-transparent py-3 placeholder:text-base' placeholder='Email Address'type='email'/>
                  {errors.email && <span className='text-xs text-[var(--color-dark-red)]'>{errors.email.message}</span>}
               </div>
               <div className='w-full flex flex-col gap-1'>
                   <input {...register('password')} className='focus:outline-none w-full border-b border-b-slate-400 bg-transparent py-3 placeholder:text-base'placeholder='Password' type='password'/>
                   {errors.password && <span className='text-xs text-[var(--color-dark-red)]'>{errors.password.message}</span>}
                </div> 
               <div className='w-full flex flex-col gap-1'>
                   <label className='upload mt-2'>Choose Profile Photo
                    <input {...register('avatar')} type='file'
                     className='hidden'/>
                   </label>   
                   {errors.avatar && <span className='text-xs text-[var(--color-dark-red)]'>{errors.avatar.message}</span>}
                 </div>
              <button className='text-center mt-2 btn' type='submit'>Create an account</button>
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