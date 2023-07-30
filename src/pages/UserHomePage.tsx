import {useState,useEffect} from 'react'
import Layout from "../components/Layout";
import Card from "../components/Card";
import axios from 'axios'

const UserHomePage = () => {
  const [items,setItems]=useState<any>([])
  const url= 'https://entertainment-web.onrender.com/api/film'
   
  const fetchAllItems=async()=>{
    try {
      const response=await axios.get(url);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
     fetchAllItems();
  },[])
  return (
   
   <>
     <Layout>
        <form>
            <input className='search-icon w-full  bg-transparent py-3 placeholder:text-base focus:outline-none'
            type='text' placeholder='Search for movies or TV series'/>
        </form>
        <h3 className='text-xl py-2'>Trending</h3>
        <section className='overflow-x-auto flex gap-4 mb-4'>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
        </section>
       <h3 className='text-xl py-2'>Recommended for you</h3>
       <section className='grid grid-cols-2'>
            {
              items.map((itm:any)=>(
                 <div key={itm.id}>
                     {itm.title}
                 </div>
              ))
            }
       </section>
     </Layout>
   </>
   
  )
}

export default UserHomePage;