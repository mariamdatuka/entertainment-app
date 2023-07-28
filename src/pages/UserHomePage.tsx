import Layout from "../components/Layout";
import Card from "../components/Card";

const UserHomePage = () => {
  return (
   
   <>
     <Layout>
        <form>
            <input className='search-icon w-full  bg-transparent py-3 placeholder:text-base focus:outline-none'
            type='text' placeholder='Search for movies or TV series'/>
        </form>
        <h3 className='text-xl py-2'>Trending</h3>
        <Card/>
     </Layout>
   </>
   
  )
}

export default UserHomePage;