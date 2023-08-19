import axios from 'axios'

const Card = ({itm}:any) => {

  let imageUrl=itm.regularSmall;
  if (window.innerWidth >= 640) {
    imageUrl = itm.regularMedium;
    if (window.innerWidth >= 1280) {
      imageUrl = itm.regularLarge; 
    }
  }
  
  const addBookmark=async(id:string)=>{
   try {
      const response = await axios.put(`https://entertainment-web.onrender.com/api/bookmark/${id}`, {
        isBookmarked:true
      })
      console.log(response)
   } catch (error) {
      console.log(error)
   }
  }


  return (
    <>
    <div className='flex flex-col gap-2'>
      <main className='card-img rounded w-40 h-28 sm:w-56 sm:h-36 xl:w-64 xl:h-44' style={{ backgroundImage:`url(https://entertainment-web.onrender.com/images/${imageUrl}`}}>
           <svg onClick={()=>addBookmark(itm._id)}className={`bookmark ${itm.isBookmarked?'bookmarked':''}`}width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E"/>
           <path d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z" stroke="white" strokeWidth="1.5"/>
           </svg>  
      </main>
      <div className='flex flex-col gap-1 self-start'>
             <div className='flex justify-center items-center gap-2'>
                 <p className='text-xs'>{itm.year}</p>
                 <div className='flex items-center justify-center gap-2'>
                    <div className='w-1 h-1 rounded-full bg-[var(--color-light-gray)]'></div>
                    {
                      itm.category==='Movie'?
                      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/></svg>
                      :
                      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#FFF" opacity=".75"/></svg>
                    }
                  
                    <p className='text-xs'>{itm.status}</p>
                    <div className='w-1 h-1 rounded-full bg-[var(--color-light-gray)]'></div>
                 </div>
                 <p className='text-xs'>{itm.rating}</p>
             </div>
             <h4 className='self-start font-bold'>{itm.title}</h4>
           </div>
          </div>
    </>
  )
}

export default Card