import React , { useState } from 'react';
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
export default function Server
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
          <h1 className="title-project">Server</h1>
          <button className='btn-add-project'  onClick={toggle}>
          <i><Icon icon="material-symbols:add-box"  /></i>
            Add Server
          </button>
        
          <Modal className=" model  mt-0 " isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
    <ModalBody className='model-body mt-0'> 
      
        <form > 
        <div className="mb-2">
      <label for="ControlInput" className="form-label"> Server Name</label>
      <Input className="form-control-model" type="text" id="server-name" name="server-name" />
    </div>
    <div className="mb-2">
      <label for="ControlInput" className="form-label">IP address</label>
      <Input className="form-control-model" type="text" id="ip-address" name="ip-address" />
    </div>
    <div className="mb-2">
      <label for="ControlInput" className="form-label">Tags</label>
      <Input className="form-control-model" type="text" id="tag" name="tag" />
    </div>
    <div className="mb-2">
      <label for="ControlInput" className="form-label">SSH Key</label>
      <Input className="form-control-model" type="text" id="ssh-key" name="ssh-key" />
    </div>
    <button className='btn-connection'>
         Test Connection 
          </button>
    </form>
    <form className='form-btn'>
    <button className="  cancel-button"   onClick={toggle}>
            Cancel
          </button>
          <button className="  submit-button"  onClick={toggle}>
            Submit
          </button>
          </form>
    </ModalBody>
    
      </Modal>
              
  
  
  
  
  
  </div>
 
  
      <div className="container-table">
       
      <table style={{ width: '1136px', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ height: '50px', padding: '10px', textAlign: 'center', background: '#BAC6F5', borderRadius: '10px' }}>Header 1</th>
          </tr>
      </thead>
      <tbody>
      <div className="code-container">
      
       
      <input type="text" className="text-input-code" placeholder="" />
      <input type="text" className="text-input-code" placeholder="" />
      <input type="text" className="text-input-code" placeholder="" />
      <input type="text" className="text-input-code" placeholder="" />
      <input type="text" className="text-input-code" placeholder="" />
   </div>
      </tbody>
     
    </table>
    </div>

  
          </div>
            </div>
            </div>
            
    
        
      );
  };
  

