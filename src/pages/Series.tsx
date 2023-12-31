import { useState,useEffect } from "react";
import Layout from "../components/Layout"
import Card from "../components/Card"
import { useAppSelector,useAppDispatch } from '../redux/store/store';
import { fetchDataAsync } from '../redux/slices/ItemsSlice';


const Series = () => {
  const [searchItem,setSearchItem]=useState<string>('');
    const dispatch=useAppDispatch();
    const items=useAppSelector((state)=>state.items.items)
    
    const handleSearch=(e:any)=>{
      setSearchItem(e.target.value)
     }

    const series=items.filter((itm)=>{
      const allSeries=itm.category==='TV Series';
      const matchedSeries=searchItem.trim()===''||itm.title.toLowerCase().includes(searchItem.toLowerCase())
      return allSeries && matchedSeries
    })
   
    useEffect(()=>{
      dispatch(fetchDataAsync())
     },[])

  return (
    <>
     <Layout>
        <form>
            <input className='search-icon w-full  bg-transparent py-3 placeholder:text-base focus:outline-none'
            type='text' value={searchItem} onChange={handleSearch}placeholder='Search for TV series'/>
        </form>
        <h3 className='text-xl py-2'>TV Series</h3>
        <section className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-4 place-items-start'>
             {
              series.map((itm,index)=>(
                <Card key={index} itm={itm}/>
              ))
             }
        </section>
     </Layout>
    </>
  )
}

export default Series