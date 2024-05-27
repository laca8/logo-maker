import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import ColorPicker from './ColorPicker'
import { UpdateStorageContext } from '../context/UpdateStorageContext'
import IconList from './IconList'

const IconController = () => {
    const storageValue=JSON.parse(localStorage.getItem('value'))
   // console.log(storageValue);
    const [size,setSize] = useState(storageValue?storageValue?.iconSize:280)
    const [rotate,setRotate] = useState(storageValue?storageValue?.iconRotate:0)
    const [color,setColor] = useState(storageValue?storageValue?.iconColor:'#fff')
   const [icon,setIcon] = useState(storageValue?storageValue?.icon:'Smile')
    const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)

    useEffect(()=>{
        const updatedValue={
            ...storageValue,
            iconSize:size,
            iconRotate:rotate,
            iconColor:color,
            icon:icon
        }
        setUpdateStorage(updatedValue)
        localStorage.setItem('value',JSON.stringify(updatedValue))

    },[size,rotate,color,icon])

  return (
    <div>
        <IconList selectedIcon={(icon)=>setIcon(icon)}/>
            <div>
                <label className='p-2 flex justify-between items-center'>Size <span>{size} px</span></label>
                <input type="range"  step={1} max={512} defaultValue={[280]} 
                onChange={(e)=>setSize(e.target.value)}
                
                />
            </div>
            <div>
                <label className='p-2 flex justify-between items-center'>Rotate <span>{rotate} </span></label>
                <input type="range"  step={1} max={300} defaultValue={[0]} 
                onChange={(e)=>setRotate(e.target.value)}
                
                />
            </div>
            <div>
                <label className='p-2 flex justify-between items-center'>Icon Color</label>
                <input type="color" className="form-control form-control-color" value={color} selectedColor={(color)=>setColor(color) } onChange={(e)=>setColor(e.target.value)}/>
            </div>
    </div>
  )
}

export default IconController