import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps{
    children:ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-3'>
              <div className='col-span-1 h-screen lg:flex items-center'>
                  <Header/>
              </div>
              <div className='col-span-1 lg:col-span-2'>
                  {children}
              </div>
      </section>
    </>
  )
}

export default Layout