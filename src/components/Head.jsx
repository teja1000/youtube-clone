import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

const Head =()=>{
  return(
  <div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className="flex col-span-1">
   <RxHamburgerMenu className="size-8"/>
   <img  className="h-10" 
   alt="youtube-logo" 
   src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"/>
  </div>
  <div className="col-span-10 flex justify-center">
    <input type="text" className="rounded-lg border-2 border-black mr-2"/>
    <button className="shadow-md text-lg p-2 bg-slate-300 font-semibold">Search</button>
  </div>
  <div className="col-span-1">
  <FaUserCircle className="size-8"/>
  </div>
  </div>
  )
}

export default Head