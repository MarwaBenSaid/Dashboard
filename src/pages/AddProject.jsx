import React from 'react';
import "../Styles/Add.css"


const AddProject = () => {
    return (
        <div>
        <div className=" add-project-container ">
          <div className="add-project-form">
            <form>
            <div class="mb-2">
      <label for="ControlInput" className="form-label">Project Name</label>
      <input className="form-control" type="text" id="project-name" name="project-name" />
    </div>
    <div class="mb-2">
      <label for="exampleFormControlTextarea1" className="form-label">Description</label>
      <textarea className="form-control" id="project-description" name="project-description" rows="3" />
    </div>
    </form>
    <div className="form-buttons d-grid d-md-block mt-5">
    <button type="button" class=" cancel-button">Cancel</button>
    <button type="button" class=" submit-button">Submit</button>
    </div>
           
          </div>
        </div>
        </div>
    );
};

export default AddProject;