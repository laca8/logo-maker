import { PencilRuler, Shield ,Image} from 'lucide-react'
import React, { useState } from 'react'

const SideNav = ({selectedIndex}) => {
    const [active,setActive] = useState(0)
    const menuList=[
        {
            id:'1',
            name:'Icon',
            icon:PencilRuler
        },
        {
            id:'2',
            name:'Background',
            icon:Image
        },
        {
            id:'3',
            name:'Upgrade',
            icon:Shield
        }
    ]
  return (
    <div className='border shadow-sm h-screen'>
        <div>
            {
                menuList.map((m,i)=>(
                    <h2 onClick={()=>{setActive(i); selectedIndex(i)}} className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer hover:bg-gray-800 hover:text-white flex items-center gap-2 ${active==i && 'bg-gray-800 text-white'}`}>
                        <m.icon/>{m.name}

                    </h2>
                ))
            }
        </div>
    </div>
  )
}

export default SideNav