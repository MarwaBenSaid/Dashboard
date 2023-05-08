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
export default function 
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
        
        <Modal className=" add-project-container mt-0 "  isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
      <ModalBody className='mt-0'> 
        
          <form className='.add-project-form'> 
          <div className="mb-2">
        <label for="ControlInput" className="form-label">Project Name</label>
        <Input className="form-control" type="text" id="project-name" name="project-name" />
      </div>
      <div class="mb-2">
        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
        <Input type="textarea" className="form-control textarea " id="project-description" name="project-description" rows="3" />
      </div> 
      </form>
      </ModalBody>
      <ModalFooter className='mt-5'>
           
            <button className="  cancel-button"   onClick={toggle}>
              Cancel
            </button>
            <button className="  submit-button"  onClick={toggle}>
              Submit
            </button>{' '}
          </ModalFooter>
        </Modal>
              
  
  
  
  
  
  </div>
      <div className="container-table">
       
      <table className="table table-server border  border-start-2 rounded-end-2">
        <thead>
          <tr>
            <th>Server name</th>
            <th>IP Address</th>
            <th>Tags</th>
            <th>Add Dates</th>
            
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
          </div>
            </div>
            </div>
            
    
        
      );
  };
  

