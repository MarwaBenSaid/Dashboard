import React , { useState }  from "react";
import '../Styles/Profil.css';
import { FaCamera } from 'react-icons/fa';


function Profile(params) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditPicture = () => {
        // Logic to handle editing the profile picture
        console.log('Editing profile picture');
      };
    return(
<div>
<div className="container-fluid">
       
       <div className="card-profil">
         <div className="">
           <img className="img1" src="../assets/images/users/avatar-10.jpg" alt="Profile photo" />
           {isEditing && (
          <div className="edit-overlay">
            <FaCamera className="camera-icon" onClick={handleEditPicture} />
          </div>
        )}
          </div>
          
             
                <div className=" col-lg-6 col-md-12">
                
               <div className=" card-body mt-3">
                 
                
                 <form autocomplete="off">
                                   <div className="mb-2">
                                       <label for="firstname" className="form-label">First name</label>
                                       <input className="form-control" type="text" id="firstname" required="" placeholder="Enter your first name" />
                                   </div>
                                   <div className="mb-2">
                                       <label for="lastname" className="form-label">Last name</label>
                                       <input className="form-control" type="text" id="lastname" required="" placeholder="Enter your last name" />
                                   </div>
                                   <div className="mb-2">
                                       <label for="emailaddress" className="form-label">Email address</label>
                                       <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                                   </div>
                                   <div className="mb-2">
                                       <label for="companyname" className="form-label">Company name</label>
                                       <input className="form-control" type="text" id="companyname" required="" placeholder="Enter your company name" />
                                   </div>
   
                                   <div className="mb-2">
                                       <label for="phonenumber" className="form-label">Phone Number</label>
                                       <input className="form-control" type="number" id="phonenumber" required="" placeholder="+216 | Enter your Phone Number" />
                                   </div>
                                   
   
                                   
                   
                                    
                   
                 </form>
                 <div >
                                       <button className="btn  text-center " type="submit">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg>
                                         Edit</button>
                                   </div>
               </div>
                           
             </div>
             
           </div>
               </div>
</div>
    );
}

export default Profile;