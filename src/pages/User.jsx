import React , { useState } from 'react';
import { RiUserLine , RiSettings4Line } from 'react-icons/ri';
import { Dropdown } from 'react-bootstrap';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from 'reactstrap';
import "../Styles/List.css";
import "../Styles/Add.css";
import "../Styles/Code.css"
import { Icon } from '@iconify/react';
import { FaUser } from 'react-icons/fa';
export default function User
() {  const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
  
    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = (e) => {
      let { value } = e.target;
      setUnmountOnClose(JSON.parse(value));
    };
  
  
      return (
          <div>
          <div className="container-project mt-5">
          <div className="row ">
          <div className="col-lg-6">
          <h1 className="title-project">Users</h1>
          <button className='btn-add-project'  onClick={toggle}>
          <i><Icon icon="material-symbols:add-box"  /></i>
            Invit new user
          </button>
        
          <Modal className=" model  mt-0 " isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
    <ModalBody className='model-body mt-0'> 
      
        <form > 
        <div className="mb-2">
      <label for="ControlInput" className="form-label"> Fullname</label>
      <Input className="form-control-model" type="text" id="full-name" name="full-name" />
    </div>
    <div className="mb-2">
      <label for="ControlInput" className="form-label">Email</label>
      <Input className="form-control-model" type="text" id="email" name="email" />
    </div>
    <div className="mb-2">
      <label for="ControlInput" className="form-label">Role</label>
      <Input className="select-model" type="select" id="role" name="role" >
            
            <option> Developer</option>
            <option>Devops</option>
          
          </Input>
    </div>
    </form>
    <form className='form-btn'>
    <button className="  cancel-button"   onClick={toggle}>
            Cancel
          </button>
          <button className="  submit-button"  onClick={toggle}>
            Send invitation
          </button>
          </form>
    </ModalBody>
    
      </Modal>
              
  
  
        <div className="code-container">
      
       
        <input type="text" className="text-input-code" placeholder="" />
        <input type="text" className="text-input-code" placeholder="" />
        <input type="text" className="text-input-code" placeholder="" />
        <input type="text" className="text-input-code" placeholder="" />
        <input type="text" className="text-input-code" placeholder="" />
    
    </div>
  
  
  </div>
      
    
        </div>
        </div>
        </div>
      );
  };