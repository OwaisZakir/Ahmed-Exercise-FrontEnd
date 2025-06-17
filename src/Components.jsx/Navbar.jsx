import React from 'react'

function Navbar() {
  return (
<>
<nav className=' w-full h-17  bg-primary flex justify-between pl-20 pr-20 px-4 items-center bg-green-900'>
<div><img src="./Images/logo.png" alt="" /></div>
<div className='hidden md:block'>
<ul className='flex text-white gap-8 '>
<li className=' hover:text-orange-400'> Home</li>
<li className=' hover:text-orange-400'> About</li>
<li className=' hover:text-orange-400'> Activities</li>
<li className=' hover:text-orange-400'> Contact</li> </ul></div>
<div className='hidden md:block ' >
<button className=' text-white bg-orange-400 gap-8 hover:bg-orange-600 p-3 rounded-2xl mr-5' >DONATE</button></div>
<div className='  md:hidden'><a href="" className='text-4xl'>&#9901;</a>




</div>

</nav>


</>
  )
}

export default Navbar