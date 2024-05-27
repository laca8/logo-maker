import React,{useState,useEffect,useContext} from 'react'
import {ChromePicker} from 'react-color';
import { UpdateStorageContext } from '../context/UpdateStorageContext'
import ColorPicker from './ColorPicker'
const BackgroundController = () => {
  const storageValue=JSON.parse(localStorage.getItem('value'))
  const [round,setRound] = useState(storageValue?`${storageValue?.bgRounded}`:0)
    const [padding,setPadding] = useState(storageValue?`${storageValue?.bgPadding}`:0)
    const [color,setColor] = useState(storageValue?storageValue?.bgColor:'gray')
    
    const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)

    useEffect(()=>{
        const updatedValue={
            ...storageValue,
            bgRounded:round,
            bgPadding:padding,
            bgColor:color
          
        }
        setUpdateStorage(updatedValue)
        localStorage.setItem('value',JSON.stringify(updatedValue))

    },[round,padding,color])
  return (
    <div>
        <div>
                <label className='p-2 flex justify-between items-center'>Round <span>{round} px</span></label>
                <input type="range"  step={1} max={512} defaultValue={[0]} 
                onChange={(e)=>setRound(e.target.value)}
                
                />
            </div>
            <div>
                <label className='p-2 flex justify-between items-center'>Padding <span>{padding} px </span></label>
                <input type="range"  step={1} max={512} defaultValue={[0]} 
                onChange={(e)=>setPadding(e.target.value)}
                
                />
            </div>
            <div>
                <label className='p-2 flex justify-between items-center'>Background Color</label>
             
                <input type="color" className="form-control form-control-color" id="exampleColorInput" value={color} selectedColor={(color)=>setColor(color) }onChange={(e)=>setColor(e.target.value)} title="Choose your color"></input>
            </div>
    </div>
  )
}

export default BackgroundController