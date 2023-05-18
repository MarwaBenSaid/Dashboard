import React, { Component } from 'react';
import '../Styles/Register.css';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();

    return(
       
<div className="container-register">
		<div className="card-login border-light ">
     
				<div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12">
						<div className="padding mt-3">
							<h2 className=" text-center ">Welcome back</h2>
							<p class="lead text-center mt-2 ">Welcome back! Please enter your details.</p>
                          <form className="justify-content-center mt-3" autocomplete="off">
                               
                                <div className="mb-2">
                                    <label for="emailaddress" className="form-label">Email address</label>
                                    <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                                </div>

								<div className="mb-2">
                                      
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                                </div>

                                <div className=" mt-2 link1 ">
                                    <a href="#">Forget you password</a>
                                </div> 

                                <div className="mb-2 text-center ">
                                    <button className="btn mb-3 text-center" type="submit"onClick={() => navigate('/Profile')}> Sign up </button>
                                </div>
								 <div className="mb-3 text-center" >
                                    <button className="btn-gogle-auth btn-icon text-center"> 
                                        <img src="../assets/images/google.png" className='img-google'/>
                                          Sign up with Google

                                    </button>
                                 </div>
                                 <div className="mb-2 ">
                                 <p className="lead p1">Don’t have an account? <a href='/sign1' className=" link2">Sign up</a></p>
                        
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
		
 
   )
}

export default Login;