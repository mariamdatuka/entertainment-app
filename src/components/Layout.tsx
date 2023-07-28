import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps{
    children:ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-12'>
              <div className='col-span-1 lg:h-screen lg:flex lg:items-center lg:col-span-2'>
                  <Header/>
              </div>
              <div className='col-span-1 m-4 lg:col-span-10 lg:pt-10'>
                  {children}
              </div>
      </section>
    </>
  )
}

export default Layout