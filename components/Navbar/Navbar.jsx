import React from 'react'
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-white dark:bg-black'>
                <div className='flex justify-between items-center '>
                    <div >
                        {/* logo section  */}
                        <div>
                            <a href="#" className='flex items-center text-2xl sm:text-3xl'>
                                <img src={logo} alt="logo" className='w-10' />
                                <span className='font-bold'>Watch </span>Store
                            </a>
                        </div>
                    </div>
                    {/* menu section  */}
                    <div className='flex justify-between items-center gap-2'>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar