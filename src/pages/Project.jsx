import React , { useState ,  useEffect} from 'react';
import axios from 'axios';

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

const Project = () => {
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const [projects, setProjects] = useState([]);


  const toggle = () => setModal(!modal);
  const changeUnmountOnClose = (e) => {
    let { value } = e.target;
    setUnmountOnClose(JSON.parse(value));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8000/projects/all');  //  Django API endpoint
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };
    return (
        <div>
        <div className="container-project mt-5">
        <div className="row ">
        <div className="col-lg-6">
        <h1 className="title-project">Projects</h1>
        <button className='btn-add-project'  onClick={toggle}>
        <i><Icon icon="material-symbols:add-box"  /></i>
          Add new Project
        </button>
      
      <Modal className=" model  mt-0 " isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
    <ModalBody className='model-body mt-0'> 
      
        <form > 
        <div className="mb-2">
      <label for="ControlInput" className="form-label">Project Name</label>
      <Input className="form-control-model" type="text" id="project-name" name="project-name" />
    </div>
    <div class="mb-2">
      <label for="exampleFormControlTextarea1" className="form-label">Description</label>
      <Input type="textarea" className="form-control-model textarea " id="project-description" name="project-description" rows="3" />
    </div> 
    
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
  {projects.map(project => (
    <div className="project-card" key={project.id}>
      <h5 className="card-title row">
        {project.title}
        <i className="icon-card">
          <Icon icon="uiw:setting" />
        </i>
      </h5>
      <p>{project.description}</p>
    </div>
  ))}
</div>
          </div>
          </div>
          
          </div>
         
      </div>
    );
};

export default Project;