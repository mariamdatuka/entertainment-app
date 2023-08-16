import { useState,useEffect } from "react";
import Layout from "../components/Layout"
import Card from "../components/Card"
import { useAppSelector,useAppDispatch } from '../redux/store/store';
import { fetchDataAsync } from '../redux/slices/ItemsSlice';

const Movies = () => {
 const [searchItem,setSearchItem]=useState<string>('');
 const dispatch=useAppDispatch();
 const items=useAppSelector((state)=>state.items.items)

 const handleSearch=(e:any)=>{
  setSearchItem(e.target.value)
 }

  const movies=items.filter((itm)=>{
   const isMovie=itm.category==='Movie';
   const matchedMovie=searchItem.trim()===''||itm.title.toLowerCase().includes(searchItem.toLowerCase());
   return isMovie && matchedMovie
  })

  useEffect(()=>{
   dispatch(fetchDataAsync())
  },[])

  return (
    <>
       <Layout>
        <form>
            <input value={searchItem} onChange={handleSearch} className='search-icon w-full  bg-transparent py-3 placeholder:text-base focus:outline-none'
            type='text' placeholder='Search for movies'/>
        </form>
        <h3 className='text-xl py-2'>Movies</h3>
        <section className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-4 place-items-start'>
             {
              movies.map((itm,index)=>(
                <Card key={index} itm={itm}/>
              ))
             }
        </section>
     </Layout>
    </>
  )
}

export default Movies