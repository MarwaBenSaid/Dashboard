import React from 'react'

export default function 

() {
  return (
    <div>

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
  )
}
