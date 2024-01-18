import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'



const Header = () => {

  const [dromdown, setDropdown] = useState(false);

  return (
    <>

      <header className='bg-slate-100 h-[90px] w-full'>
        <nav className='w-full max-w-[1200px] mx-auto h-full flex items-center justify-between'>

          <div className="logo">LOGO</div>

          <ul className='flex items-center gap-10'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to="/course">Course</Link>
            </li>
            <li>
              <div className='relative'>
                <p
                  onClick={() => setDropdown(!dromdown)}
                >Pages</p>
                <div className={`flex flex-col absolute top-16  ${dromdown ? 'hidden' : 'h-auto'}`}>
                  <Link className='hover:bg-blue-500 p-2 hover:text-white transition-all duration-100' to="/teams">OurTeams</Link>
                  <Link className='hover:bg-blue-500 p-2 hover:text-white transition-all duration-100' to="/testimonial">Testimonial</Link>
                  <Link className='hover:bg-blue-500 p-2 hover:text-white transition-all duration-100' to="/*">404 page</Link>
                </div>
              </div>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Header