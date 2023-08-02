"use client"
import {Palette} from 'lucide-react'
import Themes from '@/lib/themes.json'
import { useState } from 'react'
const ThemeButton = () => {

    const changeTheme = (newTheme:string) =>{
        document.querySelector("html")?.setAttribute("data-theme",newTheme)
    }
  return (
    <>
   <details className="dropdown">
  <summary className="m-1 btn">
    <Palette className='w-6 h-6'/>
    </summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
   {Themes.map((theme)=>(
    <li onClick={()=>{changeTheme(theme.name)}} key={theme.name} className='space-y-2 capitalize cursor-pointer py-1 font-semibold  '>
        {theme.name}
        </li>
   ))}
  </ul>
</details>
    </>
  )
}

export default ThemeButton

