import {useEffect} from 'react'
import Layout from "../components/Layout";
import Card from "../components/Card";
import { useAppSelector,useAppDispatch } from '../redux/store/store';
import { fetchDataAsync } from '../redux/slices/ItemsSlice';
import { Data } from '../../types';



const UserHomePage = () => {
 const dispatch=useAppDispatch();
 const items=useAppSelector((state)=>state.items.items)
 const trending=items.filter((itm)=>itm.isTrending===true);

useEffect(()=>{
   dispatch(fetchDataAsync())
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
             {
              trending.map((itm,index)=>(
                <Card key={index} itm={itm}/>
              ))
             }
        </section>
       <h3 className='text-xl py-2'>Recommended for you</h3>
       <section className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-4 place-items-start'>
         
             {
              items.map((itm:Data, index:number)=>(
                   <Card key={index} itm={itm}/>
              )
             )}
          
           
       </section>
     </Layout>
   </>
   
  )
}

export default UserHomePage;