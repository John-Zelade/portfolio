import React,{useState} from 'react';
import {Navigate} from'react-router-dom';
import image from './images/image1.png';
import './Home.css';
import Typed from 'react-typed';


export const Home=()=>{
        const[page, setPage]=useState(false);
    if (page){
            return <Navigate to="/about"/>;
    }   

    return(
        <>
            <div className='container-fluid home'>
            <div className='d-lg-flex flex-row'>
            <div className='image-con col'>
                <div className='image col'>     
                    <img className='img img-fluid' src={image} alt="" />
                </div> 
                </div>
                <div className='text-con col'>
                    <span className='h1'>Hi, I'm John Zelade</span>
                 <div className='typing-text'>
                    
                 <Typed
                    strings={[
                    'Aspiring Web Developer.',
                    'Aspiring UI/UX Designer.',]}
                    typeSpeed={80}
                    backSpeed={60}
                    loop >
                </Typed>
                </div>
                   
                <div className='view-con'>
                <button className="btn" onClick={()=>{setPage(true)}}>
                     <span className="btn-text-one">Know me</span>
                     <span className="btn-text-two">About</span>
                    </button>                
                </div>
                </div>  
           </div>
        </div>    
        </>
    );
}