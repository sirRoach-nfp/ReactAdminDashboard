
import { Label } from "recharts"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import "./new.scss"
import { useState } from "react";



export default function New({inputs,title}){

    const [file,setFile] = useState("")
  
    return(
        <div className="new">
            <Sidebar/>

            <div className="newContainer">
                <Navbar/>

                <div className="top">
                    <h1>{title}</h1>
                </div>

                <div className="bottom">

                    <div className="left">
                        <img src={file ? URL.createObjectURL(file):"https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" } alt="" />
                    </div>

                    <div className="right">
                        
                        <form action="">


                            
                            <div className="formInput">
                                Image:  <label htmlFor="file"><DriveFolderUploadOutlinedIcon className="icon"/></label>
                                <input type="file" id="file" style={{display: "none"}} onChange={e=>setFile(e.target.files[0])}/>
                            </div>

                            {inputs.map(input => (

                                <div className="formInput" key= {input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.text} placeholder={input.placeholder} />
                                </div>
                            ))}




                            <button>Send</button>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}