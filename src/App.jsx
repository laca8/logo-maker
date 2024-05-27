import { useState } from 'react'

import './App.css'
import Header from './components/Header.jsx'
import SideNav from './components/SideNav.jsx'
import IconController from './components/IconController.jsx'
import BackgroundController from './components/BackgroundController.jsx'
import LogoPreview from './components/LogoPreview.jsx'
import { UpdateStorageContext } from './context/UpdateStorageContext.js'
function App() {

  const [selectIndex, setSelectedIndex] = useState('')
  const [updateStorage,setUpdateStorage] = useState({})
  const [downloadIcon,setDownloadIcon]=useState()
  return (
    <UpdateStorageContext.Provider value={{updateStorage,setUpdateStorage}}>
    <>
<Header DownloadIcon={setDownloadIcon}/>
<div className='w-64 fixed'>
  <SideNav selectedIndex={(value)=>setSelectedIndex(value)}/>
</div>
<div className='ml-64 grid grid-cols-1 md:grid-cols-6 fixed'>

  <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto'>
{
  selectIndex == 0 ? <IconController/> : <BackgroundController/> 
}
  </div>
  <div className='md:col-span-4 w-full'>
  <LogoPreview downloadIcon={downloadIcon} setDownloadIcon={setDownloadIcon}/>
  </div>

</div>

       
    </>
    </UpdateStorageContext.Provider>
  )
}

export default App
