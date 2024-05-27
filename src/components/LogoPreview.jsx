import React, { useEffect, useState,useContext } from 'react'
import { UpdateStorageContext } from '../context/UpdateStorageContext'
import { icons } from 'lucide-react'
import html2canvas from 'html2canvas'
const Base_URL = 'https://logoexpress.tubeguruji.com'

const LogoPreview = ({downloadIcon}) => {
    const [storageValue,setStorageValue] = useState() 

const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)


    useEffect(()=>{
        const storageData = JSON.parse(localStorage.getItem('value'))
      //  console.log(storageData);
setStorageValue(storageData)
    },[updateStorage])
    const Icon = ({name,color,size,rotate})=>{
        const LucidIcon=icons[name]
        if(!LucidIcon){
return;
        }else{
 return <LucidIcon color={color} size={size} style={{transform:`rotate(${rotate}deg)`}}/>
        }
    }
    useEffect(()=>{
   if(downloadIcon){
    downloadPngLogo()
   }
    },[downloadIcon])
    const downloadPngLogo = ()=>{
        const downIconDiv = document.getElementById('downIconDiv')
        html2canvas(downIconDiv,{
            backgroundColor:null
        }).then(canvas=>{
            const pngImage=canvas.toDataURL('image/png');
            const downloadLink=document.createElement('a')
            downloadLink.href=pngImage;
            downloadLink.download='Logo_Maker.png';
            downloadLink.click();
        })

    }
  return (
   
    <div className='w-full flex items-center justify-center  h-screen'>
    <div  className='h-[300px] w-[300px] bg-gray-100 outline-dotted outline-gray-300' 
    style={{padding:`${storageValue?.bgPadding}px`}}
    >
<div className='h-full w-full flex items-center justify-center' id='downIconDiv' style={{borderRadius:`${storageValue?.bgRounded}px`,
    background:storageValue?.bgColor,

}}>
     {
            storageValue?.icon?.includes('.png') ? <img src={'/png/'+storageValue?.icon} style={{
                height:`${storageValue?.iconSize}px`,
                width:`${storageValue?.iconSize}px`,
                
            }} size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}/>:<Icon name={storageValue?.icon} 
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
            />
          }
    
</div>

    </div>
    </div>
   
  )
}

export default LogoPreview