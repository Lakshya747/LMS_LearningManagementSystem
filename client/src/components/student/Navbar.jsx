import React, { useContext } from 'react'
import { assets } from "../../assets/assets"
import { Link } from "react-router-dom"
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
const Navbar = () => {

    const { navigate, isEducator, setIsEducator } = useContext(AppContext);

    const isCourseListPage = location.pathname.includes('/course-list')

    const { openSignIn } = useClerk();
    const { user } = useUser();

    return (
        <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
            <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-none' />
            <div className='hidden md:flex items-center gap-5 text-gray-500'>
                <div className='flex items-center gap-5'>
                    {user &&
                        <>
                            <button onClick={() => navigate('/educator')}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
                            | <Link to='/my-enrollments' >My enrollments</Link>
                        </>}
                </div>
                {user ? <UserButton /> : <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer'>Create Account</button>}
            </div>
            {/* For phone screen */}
            <div className='md:hidden flex items-center gap-5  text-gray-500'>
                <div className='text-xs flex items-center gap-2'>
                    {user &&
                        <>
                            <button className='border-0 border-b-2 border-gray-500' onClick={() => navigate('/educator')}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>

                            |<Link to='/my-enrollments ' className='border-0 border-b-2 border-gray-500'> My enrollments</Link>
                        </>
                    }
                </div>
                {user ? <UserButton /> :
                    <button onClick={() => openSignIn()}><img className='' src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.9992%2011.9607C13.8239%2011.9607%2015.3031%2010.4989%2015.3031%208.69568C15.3031%206.89246%2013.8239%205.43066%2011.9992%205.43066C10.1745%205.43066%208.69531%206.89246%208.69531%208.69568C8.69531%2010.4989%2010.1745%2011.9607%2011.9992%2011.9607Z'%20stroke='%231C274C'/%3e%3cpath%20d='M12%2023C18.0751%2023%2023%2018.0751%2023%2012C23%205.92487%2018.0751%201%2012%201C5.92487%201%201%205.92487%201%2012C1%2018.0751%205.92487%2023%2012%2023Z'%20stroke='%231C274C'/%3e%3cpath%20d='M18.5685%2020.8241C18.3934%2017.6322%2017.4191%2015.3047%2011.9995%2015.3047C6.58005%2015.3047%205.6058%2017.6322%205.43066%2020.8241'%20stroke='%231C274C'%20stroke-linecap='round'/%3e%3c/svg%3e" alt="" /></button>
                }

            </div>
        </div >
    )
}

export default Navbar