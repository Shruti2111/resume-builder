import React,{useEffect, useState,useRef} from 'react';
import './CreateResume.css';
import Details from './Details';
import Template2 from './Template2';
import Template3 from './Template3';
import Template1 from './Template1';
import ReactToPrint from 'react-to-print';
import axios from "axios"
import { useNavigate } from "react-router-dom"

function CreateResume(){

    let navigate = useNavigate();

    const sections ={
        basicInfo: "Basic Info",
        education: "Education",
        workExp: "Work Experience",
        skills:"Skills",
        project: "Projects",
        achievements: "Achievements",
        certificate:"Certificates",
        lang: "Languages Known",
        other: "Other",
       }

       const resumeRef=useRef()

       const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {}
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: []
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: []
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: []
        },
        [sections.achievements]: {
            id: sections.achievements,
            sectionTitle: sections.achievements,
            points: []
        },
        [sections.skills]: {
            id: sections.skills,
            sectionTitle: sections.skills,
            details: []
        },
        [sections.certificate]: {
            id: sections.certificate,
            sectionTitle: sections.certificate,
            details: []
        },
        [sections.lang]: {
            id: sections.lang,
            sectionTitle: sections.lang,
            details: []
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            detail: {}
        },

    });

    useEffect(() => {
        console.log(resumeInformation);
    },[resumeInformation]);

    return(
        <div >
          
          <div className='content'>
              <p>Fill in details to download Resume</p>
          <ReactToPrint
          trigger={() => {
            
            return(<button className='btn'>Download <i class="fa-solid fa-download"></i></button>);
          }}
          content={() => resumeRef.current}   
          />  
           </div> 
        <div className="main"> 
           <Details sections={sections} 
                    information={resumeInformation}
                    setInformation={setResumeInformation} />
        
          <Template3 
                     ref={resumeRef}
                     sections={sections}
                     information={resumeInformation}/>     
                     <Template1 
                     ref={resumeRef}
                     sections={sections}
                     information={resumeInformation}/>            
       </div>
       </div>
    )
}

export default CreateResume;