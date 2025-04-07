import {Menu , X} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const HamburgerNav = () => {
    const [open, setOpen] = useState(false)
  return (
   <>
   {open ? <X className='text-white' onClick={() => setOpen(!open)} /> : <Menu className='text-white' onClick={() => setOpen(!open)} />}
    {open && (
        <>
        <div className='absolute top-0 left-0 w-full h-screen bg-stone-800 flex flex-col justify-start items-start flex-wrap gap-10'>
           <X className='text-white' onClick={() => setOpen(!open)} />
           <div className='flex flex-col items-center justify-center flex-wrap gap-10 pl-32 pt-20'>
            <div className='text-white font-mono hover:text-black hover:bg-white p-2 rounded-lg'><Link to='/home'>Home</Link></div>
            <div className='text-white font-mono hover:text-black hover:bg-white p-2 rounded-lg'><Link to='/skills'>Skills</Link></div>
            <div className='text-white font-mono hover:text-black hover:bg-white p-2 rounded-lg'><Link to='/projects'>Projects</Link></div>
            <div className='text-white font-mono hover:text-black hover:bg-white p-2 rounded-lg'><Link to='/contact'>Contact</Link></div>
           </div>
        </div>
        </>
    )}
   </>
  )
}

export default HamburgerNav
