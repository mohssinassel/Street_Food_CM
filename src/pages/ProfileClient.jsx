import React from "react";
import '../styles/profilClient.css';
import { FaStar } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";


function ProfileClient(){
    return (
        <>
            
            <div className='client_info'>
                <h3>your Information</h3>
                <div className="client_info_div">
                    <div>
                        <p>Name</p>
                        <LuPencilLine className="icon_modif"/>
                    </div>
                    <hr className="clientHr"/>
                    <p>Assel Mohssin</p>
                </div>
                <div className="client_info_div">
                    <div>
                        <p>Email</p>
                        <LuPencilLine className="icon_modif"/>
                    </div>
                    <hr className="clientHr"/>
                    <p>mohssin@gmail.com</p>
                </div>
                <div className="client_info_div">
                    <div>
                        <p>Phone</p>
                        <LuPencilLine className="icon_modif"/>
                    </div>
                    <hr className="clientHr"/>
                    <p>+212 000000722</p>
                </div>
                <div className="client_info_div">
                    <div>
                        <p>Gender</p>
                        <LuPencilLine className="icon_modif"/>
                    </div>
                    <hr className="clientHr"/>
                    <p>Male</p>
                </div>
                <div className="client_info_div">
                    <div>
                        <p>Nationalite</p>
                        <LuPencilLine className="icon_modif"/>
                    </div>
                    <hr className="clientHr"/>
                    <p>Marocaine</p>
                </div>
            </div>
            
        </>
    )
}

export default ProfileClient;