import React,{useState,useEffect,useContext} from 'react'
import { Smile } from 'lucide-react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { iconList } from '../constants/icons';
import { icons } from 'lucide-react'
import Nav from 'react-bootstrap/Nav';
import axios from 'axios'
import { UpdateStorageContext } from '../context/UpdateStorageContext'

const Base_URL = 'https://logoexpress.tubeguruji.com'
const IconList = ({selectedIcon}) => {
  
    const storageValue=JSON.parse(localStorage.getItem('value'))
    const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)


    useEffect(()=>{
        const storageData = JSON.parse(localStorage.getItem('value'))
      

    },[updateStorage])
    const [show, setShow] = useState(false);
    const [pngIconList,setPngIconList] = useState([])
    const [icon,setIcon] = useState(storageValue?storageValue?.icon : 'Smile')
    const Icon = ({name,color,size,rotate})=>{
        const LucidIcon=icons[name]
        if(!LucidIcon){
return;
        }else{
 return <LucidIcon color={color} size={size} />
        }
    }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getPngIcons = ()=>{
    axios.get(Base_URL+'/getIcons.php').then(res=>{
      //console.log(res.data)
      setPngIconList(res.data)
    })
  }
  useEffect(()=>{
    getPngIcons()
  
      },[icon])
  return (
    <div>
        <label>Icon</label>
        <div className='p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center' onClick={handleShow}>
          {
            icon?.includes('.png') ? <img src={Base_URL+'/png/'+storageValue?.icon}/>:<Icon name={storageValue?.icon} size={20} color='#000'/>
          }
            </div> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pic Your Favorite Icon</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Icon</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Color-Icon</button>
   
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[300px]'>
{
    iconList.map((icon,i)=>(
<div className='border p-3 rounded-sm items-center justify-center cursor-pointer' onClick={()=>{selectedIcon(icon); setShow(false)}}>

    <Icon name={icon} color={`#000`} size={20}/>
   
    
</div>
    ))
}
</div>
</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[300px]'>
{
    pngIconList?.map((icon,i)=>(
<div className='border p-3 rounded-sm items-center justify-center cursor-pointer' onClick={()=>{selectedIcon(icon); setShow(false)}}>

    <img src={Base_URL+'/png/'+icon}/>
   
    
</div>
    ))
}
</div>
</div>
  </div>
  
</div>
     
    
        </Modal.Body>
       
      </Modal>
  
    </div>
  )
}

export default IconList