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
import "../Styles/Add.css"
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
          <h1 className="title-project">Environments</h1>
          <button className='btn-add-project'  onClick={toggle}>
          <i><Icon icon="material-symbols:add-box"  /></i>
            Add new Environment
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
              <div className="search-container ">
  
  <Input
         type="text"
         className="form-control"
         placeholder=" Search..."
         aria-label="Search"
         aria-describedby="basic-addon1"
       />
  
  
  
  
  
  </div>
              <div className="project-list">
          
            <div className="project-card">
              <h5 className='card-title row' >Environment Title
              <i className="icon-card">
              <Icon icon="uiw:setting"  />
              </i> </h5>
              <p> 
              Lorem ipsum dolor sit amet consectetur. Lacinia at nunc a diam dictum curabitur non nisl.
              </p>
            </div>
            <div className="project-card">
              <h5 className='card-title row' >Project Title
              <i className="icon-card">
              <Icon icon="uiw:setting" />
              </i> </h5>
              <p>Lorem ipsum dolor sit amet consectetur. Lacinia at nunc a diam dictum curabitur non nisl.</p>
            </div>
            
            <div className="project-card">
              <h5 className='card-title row' >Environment Title
              <i className="icon-card">
              <Icon icon="uiw:setting" />
              </i> </h5>
              <p>Lorem ipsum dolor sit amet consectetur. Lacinia at nunc a diam dictum curabitur non nisl.</p>
            </div>
            <div className="project-card">
              <h5 className='card-title row' >Environment Title
              <i className="icon-card">
              <Icon icon="uiw:setting"  />
              </i> </h5>
              <p>Lorem ipsum dolor sit amet consectetur. Lacinia at nunc a diam dictum curabitur non nisl.</p>
            </div>
            <div className="project-card">
              <h5 className='card-title row' >Project Title
              <i className="icon-card">
              <Icon icon="uiw:setting"  />
              </i> </h5>
              <p mt-3>Lorem ipsum dolor sit amet consectetur. Lacinia at nunc a diam dictum curabitur non nisl.</p>
            </div>
            <div className="project-card">
              <h5 className='card-title row' >Project Title
              <i className="icon-card">
              <Icon icon="uiw:setting" />
              </i> </h5>
              <p className="p mt-2">Lorem ipsum dolor sit amet consectetur. Lacinia at nunc a diam dictum curabitur non nisl.</p>
            </div>
            {/* Repeat project cards for each project */}
          </div>
            </div>
            </div>
            
            </div>
           
        </div>
      );
  };
  

