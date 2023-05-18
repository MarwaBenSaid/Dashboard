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
export default function Code
() {  const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
  
    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = (e) => {
      let { value } = e.target;
      setUnmountOnClose(JSON.parse(value));
    };
    const [isConnectionSuccessful, setIsConnectionSuccessful] = useState(false);

    const testConnection = async (name, link, accessKey) => {
      try {
        const response = await fetch('/test-connection/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': 'your-csrf-token', // Replace with your CSRF token
          },
          body: JSON.stringify({ name, link, access_key: accessKey }),
        });
  
        const data = await response.json();
        if (response.ok) {
          setIsConnectionSuccessful(true);
        } else {
          setIsConnectionSuccessful(false);
        }
      } catch (error) {
        setIsConnectionSuccessful(false);
      }
    };
      return (
          <div>
          <div className="container-project mt-5">
          <div className="row ">
          <div className="col-lg-6">
          <h1 className="title-project">Code Sources</h1>
          <button className='btn-add-project'  onClick={toggle}>
          <i><Icon icon="material-symbols:add-box"  /></i>
            Add Code Sources
          </button>
        
          <Modal className=" model  mt-0 " isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
    <ModalBody className='model-body mt-0'> 
      
        <form > 
        <div className="mb-2">
      <label for="ControlInput" className="form-label"> Name</label>
      <Input className="form-control-model" type="text" id="name" name="name" />
    </div>
    <div className="mb-2">
      <label for="ControlInput" className="form-label">Link</label>
      <Input className="form-control-model" type="text" id="link" name="link" />
    </div>
    <div className="mb-2">
      <label for="ControlInput" className="form-label">Access Key</label>
      <Input className="form-control-model" type="text" id="accessKey" name="accessKey" />
    </div>
    <button className='btn-connection'
    onClick={() => {
          const name = document.getElementById('name').value;
          const link = document.getElementById('link').value;
          const accessKey = document.getElementById('accessKey').value;

          testConnection(name, link, accessKey);
        }}
        style={{ backgroundColor: isConnectionSuccessful ? 'green' : 'blue' }}
      >
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
  

