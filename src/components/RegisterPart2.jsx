import React from 'react';
import '../Styles/Register.css';
function RegisterPart2(){

    return(
        <div>
        
<div className="container-register mt-0">
		<div className="card-login border-light ">
     
				<div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12">
						<div className="padding">
            <h2 className=" text-center mt-5">Create your password</h2>
							
							<form autocomplete="off">
                               
                            
                                <div className="mb-2">
                                    <label for="emailaddress" className="form-label"> Password</label>
                                    <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                                    <p class="lead  mt-2 ">The password must have at least 10 characters with 1 lower case, 1 upper case and 1 number.</p>
                                </div>
                                <div className=" mt-3 mb-2">
                                    <label for="companyname" className="form-label">Repeat your password</label>
                                    <input className="form-control" type="text" id="companyname" required="" placeholder="Enter your company name" />
                                </div>

                             

                               

                                <div className="mb-2 mb-0 text-center ">
                                    <button className="btn mb-3 mb-0 text-center" type="submit"> Continue </button>
                                </div>
								
                                
                                 
								
							</form>
                                
              
						</div>
                        
					</div>
					<div className="col-lg-6 col-md-12">
                        <div className="padding  align-items-center ser ">

                                     <img src="../assets/images/Serops-Logo.png" alt="" className="logo " />    
                                     <img src="./assets/images/Serops-img.png" alt=""   className='img-ser'/>    
						
                                    
							
							
								
							

					
						</div>
					</div>
					
				</div>
            </div>
    
			</div>
		
            </div>
	
 
   )
}

export default RegisterPart2;