import React, { useState } from 'react';
import "../Styles/Sidebar.css"
import {
    FaTh,
    FaBars,
    FaCodeBranch,
    FaProjectDiagram,
    FaUsers,
    FaServer
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/project",
            name:"Project",
            icon:<FaProjectDiagram/>,
            childrens: [
                {path:"/",
                    name: "Facebook",
                    icon: "bi-facebook"
                },
                {
                    path:"/",
                    name: "Twitter",
                    icon: "bi-twitter"
                }
            ]
        },
        {
            path:"/code",
            name:"Source codes",
            icon:<FaCodeBranch/>
        },
        {
            path:"/server",
            name:"Servers",
            icon:<FaServer/>
        },
        
        {
            path:"/user",
            name:"Users",
            icon:<FaUsers/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "230px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">
   
                <img src="../assets/images/Serops-Logo.png" alt="" className="logo " /> 
             

                   </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;