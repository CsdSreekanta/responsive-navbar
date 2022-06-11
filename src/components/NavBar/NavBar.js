import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes=[
        {id:1, name:' Home', link:'/home'},
        {id:2, name:' Service', link:'/service'},
        {id:3, name:' DashBoard', link:'/dashboard'},
        {id:4, name:'Contact', link:'/contact'},
    ]
    
    return (

        
        <nav className='bg-indigo-200 '>
            <div onClick={()=> setOpen(!open)} className='w-6 h-6 md:hidden'>
              { open ?<XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
        <ul className={`md:flex justify-center items-center
        md:static absolute duration-700 bg-indigo-200 w-full md:h-10  ease-in ${open? 'top-6' : 'top-[-100px]'}`}>
                {
                    routes.map(route => <Link
                    key={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
            
        </nav>
    );
};

export default NavBar;