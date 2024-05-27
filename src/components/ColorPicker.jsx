import React, { useState } from 'react'
import {ChromePicker} from 'react-color';
const ColorPicker = ({selectedColor}) => {
    const [color,setColor] = useState('rgba(255,255,255,1)')
  return (
    <div className='w-100%'>
        
        <ChromePicker
            color={color}
            value={color}
            onChange={(e)=>{setColor(e);selectedColor(e)}}
        />
    </div>
  )
}

export default ColorPicker