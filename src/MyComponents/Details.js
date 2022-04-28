import React,{useEffect, useState} from 'react';
import InputControl from './InputControl';
import axios from "axios";
import './Details.css';

function Details(props){
    const sections= props.sections;
    const information= props.information;

    const [activeSectionKey,setActiveSectionKey]=useState(Object.keys(sections)[0]);
    
    const [sectionTitle,setSectionTitle]=useState(
        sections[Object.keys(sections)[0]]
    );

    const [activeInformation,setActiveInformation]=useState(
        information[sections[Object.keys(sections)[0]]]
    );

    const [activeDetailIndex,setActiveDetailIndex] = useState(0);

    const [values,setValues]=useState({
        fname: activeInformation?.detail?.fname || "",
        lname: activeInformation?.detail?.lname || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        email: activeInformation?.detail?.email || "",
        phone:  activeInformation?.detail?.phone || "",
        address: activeInformation?.detail?.address || "",
        file:[],
    });

    const handlePointUpdate=(value,index)=>{
        const tempValues={...values};
        if (!Array.isArray(tempValues.points)) 
            tempValues.points = [];
        tempValues.points[index]=value;
        setValues(tempValues);
    };
/*
    const handleInputChange=()=>{

    };
*/
    const basicInfoBody=(
        <div className="detail">
            <div className="row">
                <InputControl
                   label="First Name"
                   placeholder="Enter First Name eg. Shruti"
                   value={values.fname}
                   name="fname"
                   onChange={(event)=>
                   setValues((prev) => ({...prev, fname: event.target.value}))
                } 
                />
                <InputControl
                   label="Last Name"
                   placeholder="Enter Last Name eg. Goel"
                   value={values.lname}
                   name="lname"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, lname: event.target.value}))
                 }
                />
                <InputControl
                   label="Title"
                   placeholder="Enter your Title eg. Software Engineer"
                   value={values.title}
                   name="title"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, title: event.target.value}))
                 }
                />
            </div>
            <div className="row">
                <InputControl
                   label="Email"
                   placeholder="Enter your email eg. abc@xyz.com"
                   value={values.email}
                   name="email"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, email: event.target.value}))
                 }
                />
                <InputControl
                   label="Phone number"
                   placeholder="Enter your phone number"
                   value={values.phone}
                   name="phno"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, phone: event.target.value}))
                 }
                />
            </div>
            <div className="row">
                <InputControl
                   label="Address"
                   placeholder="Enter your residential address"
                   type="textarea"
                   value={values.address}
                   name="address"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, address: event.target.value}))
                 }
                />
               
            </div>
            <div className="row">
                <InputControl
                   label="Linkedin Link"
                   placeholder="Enter your linkedin profile link"
                   value={values.linkedin}
                   name="linkedin"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, linkedin: event.target.value}))
                 }
                />
                <InputControl
                   label="Github Link"
                   placeholder="Enter your github profile link"
                   value={values.github}
                   name="github"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, github: event.target.value}))
                 }
                />
            </div>
        </div>
    );
    
    const workExpBody=(
        <div className="detail">
            <div className="row">
                <InputControl
                   label="Title"
                   name = "title"
                   placeholder="Enter Title eg. Software Engineer"
                   value={values.title}
                   onChange={(event)=>
                    setValues((prev) => ({...prev, title: event.target.value}))
                 }
                />
                <InputControl
                   label="Company Name"
                   placeholder="Enter Comapny Name eg. amazon"
                   value={values.companyName}
                   name ="companyName"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, companyName: event.target.value}))
                 }
                />
            </div>
            <div className="row">
                <InputControl
                   label="Certificate Link"
                   placeholder="Enter Certificate Link"
                   value={values.certificateLink}
                   name="certificateLink"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, certificateLink: event.target.value}))
                 }
                />
                <InputControl
                   label="Location"
                   placeholder="Enter Location eg. Remote"
                   value={values.location}
                   name="location"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, location: event.target.value}))
                 }
                />
            </div>
            <div className="row">
                <InputControl
                   label="Start Date"
                   type="date"
                   placeholder="Enter start date of work"
                   value={values.startDate}
                   name="startDate"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, startDate: event.target.value}))
                 }
                />
                <InputControl
                   label="End Date"
                   type="date"
                   placeholder="Enter end date of work"
                   value={values.endDate}
                   name="endDate"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, endDate: event.target.value}))
                 }
                />
            </div>
    
            <div className="column">
                <label>Enter work description</label>
                <InputControl 
                    placeholder="Line 1"
                    value={values.points?values.points[0] :""}
                    name="points"
                    onChange={(event)=>handlePointUpdate(event.target.value,0)}
                     />
                <InputControl 
                    placeholder="Line 2"
                    value={values.points?values.points[1] :""} 
                    name="points"
                    onChange={(event)=>handlePointUpdate(event.target.value,1)}
                    />
                <InputControl 
                    placeholder="Line 3"
                    value={values.points?values.points[2] :""} 
                    name="points"
                    onChange={(event)=>handlePointUpdate(event.target.value,2)}
                    />
            </div>
        </div>
    );
    
    const projectBody=(
        <div className="detail">
            <div className="row">
            <InputControl
                   label="Title"
                   placeholder="Enter Project Title"
                   value={values.title}
                   name="title"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, title: event.target.value}))
                 }
            />
            </div>
            <div className="row">
            <InputControl
                   label="Overview"
                   placeholder="Enter basic overview of project"
                   value={values.overview}
                   name="overview"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, overview: event.target.value}))
                 }
            /></div>
            <div className="row">
            <InputControl
                   label="Deployed Link"
                   placeholder="Enter Deployed Link of Project"
                   value={values.link}
                   name="link"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, link: event.target.value}))
                 }
            />
            <InputControl
                   label="Github Link"
                   placeholder="Enter github link of project"
                   value={values.github}
                   name="github"
                   onChange={(event)=>
                    setValues((prev) => ({...prev, github: event.target.value}))
                 }
            />
            </div>
            <div className='column'>
                <label>Enter Project Discription</label>
                <InputControl 
                    placeholder="Line 1"
                    value={values.points?values.points[0] :""}
                    name="points"
                    onChange={(event)=>handlePointUpdate(event.target.value,0)} />
                <InputControl 
                    placeholder="Line 2"
                    value={values.points?values.points[1] :""} 
                    name="points"
                    onChange={(event)=>handlePointUpdate(event.target.value,1)}/>
                <InputControl 
                    placeholder="Line 3"
                    value={values.points?values.points[2] :""}
                    name="points"
                    onChange={(event)=>handlePointUpdate(event.target.value,2)} />
                     <InputControl 
                    placeholder="Line 4"
                    value={values.points?values.points[4] :""}
                    name="points"
                    onChange={(event)=>handlePointUpdate(event.target.value,3)} />
            </div>
        </div>
    );
    
    const educationBody=(
        <div className="detail">
            <div className="row">
            <InputControl
                   label="College/School Name"
                   placeholder="Enter name of college/school"
                   value={values.college}
                   onChange={(event)=>
                    setValues((prev) => ({...prev, college: event.target.value}))
                 }
            />
            <InputControl
                   label="Class/Branch"
                   placeholder="Enter class"
                   value={values.classCollege}
                   onChange={(event)=>
                    setValues((prev) => ({...prev, classCollege: event.target.value}))
                 }
            />
              </div>
            <div className="row">
            <InputControl
                   label="Start Date"
                   type="date"
                   placeholder="Enter start date of education"
                   value={values.startDate}
                   onChange={(event)=>
                    setValues((prev) => ({...prev, startDate: event.target.value}))
                 }
            />
            <InputControl
                   label="End Date"
                   type="date"
                   placeholder="Enter end date of education"
                   value={values.endDate}
                   onChange={(event)=>
                    setValues((prev) => ({...prev, endDate: event.target.value}))
                 }
            />
            </div>
            <div className="row">
            <InputControl
                   label="Percentage/CGPA obtained"
                   placeholder="Enter marks obtained"
                   value={values.marks}
                   onChange={(event)=>
                    setValues((prev) => ({...prev, marks: event.target.value}))
                 }
            />
            </div>
            
        </div>
    );

    const achievementBody = (
        <div className="detail">
            <div className="column">
                <label>List your achievements</label>
                <InputControl 
                    placeholder="Line 1"
                    value={values.points?values.points[0] :""}
                    onChange={(event)=>handlePointUpdate(event.target.value,0)} />
                <InputControl 
                    placeholder="Line 2"
                    value={values.points?values.points[1] :""}
                    onChange={(event)=>handlePointUpdate(event.target.value,1)} />
                <InputControl 
                    placeholder="Line 3"
                    value={values.points?values.points[2] :""}
                    onChange={(event)=>handlePointUpdate(event.target.value,2)} />
                     <InputControl 
                    placeholder="Line 4"
                    value={values.points?values.points[3] :""}
                    onChange={(event)=>handlePointUpdate(event.target.value,3)} />
            </div>
        </div>
    );

    const skillBody = (
        <div className="detail">
            <div className="row">
                <label>List your skills</label>
                <InputControl placeholder="Skill 1" 
                value={values.skill}
                onChange={(event)=>
                    setValues((prev) => ({...prev, skill: event.target.value}))
                 }
                 />
            </div>
        </div>
    );

    const langBody = (
        <div className="detail">
            <div className="column">
                <label>Languages Known</label>
                <InputControl placeholder="Select Language"
                value={values.language}
                onChange={(event)=>
                   setValues((prev) => ({...prev, language: event.target.value}))
                }/>
            </div>
        </div>
    );

    const certificateBody = (
        <div className="detail">
            <div className="column">
            <InputControl
                   label="Description"
                   placeholder="Enter description of certificate"
                   value={values.description}
                   onChange={(event)=>
                    setValues((prev) => ({...prev, description: event.target.value}))
                 }
            />
            <InputControl
                   label="Certificate Link"
                   placeholder="Attach certificate Link"
                   value={values.certificatelink}
                   onChange={(event)=>
                    setValues((prev) => ({...prev, certificateLink: event.target.value}))
                 }
            />
            </div>
        </div>
    );
    /*
    let file=document.getElementById('imgField').files[0]
    console.log(file);

    let reader=new FileReader()
    reader.readAsDataURL(file);

    console.log(reader.result);

    reader.onloadend = function() {
        document.getElementById("imgTemplate").src = reader.result};
*/
    const otherBody=(
        <div className="detail">
            <div className="row">
            <InputControl
                   label="Select Image"
                   type="file"
                   encType="multipart/form-data"
                   id="imgField"
                   name="upload_file"
                   value={values.file}
                   onChange={(event)=>
                   setValues((prev) => ({...prev, file: event.target.files[0]}))
                 }
            />
            </div>
        </div>   
    );

    const generateBody = ()=> {
        switch(sections[activeSectionKey]){
            case sections.basicInfo: return basicInfoBody;
            case sections.workExp: return workExpBody;
            case sections.project: return projectBody;
            case sections.education: return educationBody;
            case sections.achievements: return achievementBody;
            case sections.skills: return skillBody;
            case sections.lang: return langBody;
            case sections.certificate: return certificateBody;
            case sections.other: return otherBody;
            default: 
                 return null;
        }
    };

    const handleSubmission = async(event) =>{
        event.preventDefault();
       switch(sections[activeSectionKey])
       {
           case sections.basicInfo: {
               const tempDetails={
                   fname: values.fname,
                   lname: values.lname,
                   linkedin:values.linkedin,
                   github:values.github,
                   email:values.email,
                   phone:values.phone,
                   title:values.title, 
                   address:values.address,
               };
               
               props.setInformation((prev) => ({
                   ...prev,
                   [sections.basicInfo]: {
                       ...prev[sections.basicInfo],
                       detail:tempDetails,
                       sectionTitle,
                   }
               }));
      
              axios.post("http://localhost:9002/details", tempDetails);
               break;

           }

        case sections.education: {
            const tempDetails={
                college: values.college,
                classCollege: values.classCollege,
                startDate:values.startDate,
                endDate:values.endDate,
                marks:values.marks,
            };
            const tempDetail = [...information[sections.education]?.details];
               tempDetail[activeDetailIndex]=tempDetails;

               props.setInformation((prev) => ({
                ...prev,
                [sections.education]: {
                    ...prev[sections.education],details:tempDetail,
                    sectionTitle,
                }
            }));
             axios.post("http://localhost:9002/details", tempDetails);
            break;
        }

        case sections.workExp: {
            const tempDetails={
                title: values.title,
                companyName: values.companyName,
                certificateLink:values.certificateLink,
                location:values.location,
                startDate:values.startDate,
                endDate:values.endDate,
                points:values.points, 
            };
            const tempDetail = [...information[sections.workExp]?.details];
               tempDetail[activeDetailIndex]=tempDetails;


               props.setInformation((prev) => ({
                ...prev,
                [sections.workExp]: {
                    ...prev[sections.workExp],details:tempDetail,
                    sectionTitle,
                }
            }));
             axios.post("http://localhost:9002/details",tempDetails);
            break;
        }

        case sections.skills: {
            const tempDetails={
                skill: values.skill,
            };
            const tempDetail = [...information[sections.skills]?.details];
               tempDetail[activeDetailIndex]=tempDetails;

               props.setInformation((prev) => ({
                ...prev,
                [sections.skills]: {
                    ...prev[sections.skills],details:tempDetail,
                    sectionTitle,
                }
            }));
            axios.post("http://localhost:9002/details",tempDetails);
            break;
        }

        case sections.project: {
            const tempDetails={
                title: values.title,
                overview: values.overview,
                link:values.link,
                github:values.github,
                points:values.points, 
            };
            const tempDetail = [...information[sections.project]?.details];
               tempDetail[activeDetailIndex]=tempDetails;


               props.setInformation((prev) => ({
                ...prev,
                [sections.project]: {
                    ...prev[sections.project],details:tempDetail,
                    sectionTitle,
                }
            }));
            axios.post("http://localhost:9002/details",tempDetails);
            break;
        }

        case sections.achievements: {
            const tempPoints=values.points;
           
            props.setInformation((prev) => ({
                ...prev,
                [sections.achievements]: {
                    ...prev[sections.achievements],points:tempPoints,
                    sectionTitle,
                }
            }));
            axios.post("http://localhost:9002/details",tempPoints);
            break;
        }

        case sections.certificate: {
            const tempDetails={
                certificateLink:values.certificateLink,
                description:values.description, 
            };
            const tempDetail = [...information[sections.certificate]?.details];
               tempDetail[activeDetailIndex]=tempDetails;


               props.setInformation((prev) => ({
                ...prev,
                [sections.certificate]: {
                    ...prev[sections.certificate],details:tempDetail,
                    sectionTitle,
                }
            }));
            axios.post("http://localhost:9002/details",tempDetails);
            break;
        }

        case sections.lang: {
            const tempDetails={
                language:values.language, 
            };
            const tempDetail = [...information[sections.lang]?.details];
               tempDetail[activeDetailIndex]=tempDetails;


               props.setInformation((prev) => ({
                ...prev,
                [sections.lang]: {
                    ...prev[sections.lang],details:tempDetail,
                    sectionTitle,
                }
            }));
            axios.post("http://localhost:9002/details",tempDetails);
            break;
        }

        case sections.other: {
            const tempDetails={
              file:values.file
            };
            
            props.setInformation((prev) => ({
                ...prev,
                [sections.other]: {
                    ...prev[sections.other],
                    detail:tempDetails,
                    sectionTitle,
                }
            }));
           
        /*    const formdata = new FormData();
            formdata.append('avatar', values.file);
            axios.post("http://localhost:9002/details", formdata,{
                headers:{"Content-Type": "multipart/form-data"}
            })
            .then(res => {
                console.warn(res);
            })*/
            break;
        }
       } 
       
       /*
       const config = {
           headers: {
               "Content-Type" : "application/json",
           },
       };
       try{
           const body= JSON.stringify(props.setInformation);
           axios.post("http://localhost:9002/details", body, config);
           window.location.reload();
       }catch(err){
           console.error("error", err.response.data);
       }
       */    
    };

    const handleAddNew = () =>{
        const details=activeInformation?.details;
        if(!details)
           return;
        const lastDetail = details.slice(-1)[0];
        if( !Object.keys(lastDetail).length)
           return;
        details?.push({});

        props.setInformation(prev => ({
            ...prev,
            [sections[activeSectionKey]]:
            {...information[sections[activeSectionKey]],
            details: details,
            },
        })); 
        setActiveDetailIndex(details?.length-1);
    };

    const handleDeleteNew = (index) =>{
        const details=activeInformation?.details ? [...activeInformation?.details]
        : "";
        if(!details)
           return;
        details.splice(index,1);
        props.setInformation(prev => ({
            ...prev,
            [sections[activeSectionKey]]:
            {...information[sections[activeSectionKey]],
            details: details,
            },
        })); 
        setActiveDetailIndex((prev => (prev===index ? 0: prev-1)));
    };
   
    useEffect(()=>{
        const activeInfo = information[sections[activeSectionKey]];
        setActiveInformation(activeInfo);
        setSectionTitle(sections[activeSectionKey]);
        setActiveDetailIndex(0);
        setValues({
        fname: activeInfo?.detail?.fname || "",
        lname: activeInfo?.detail?.lname || "",
        title: activeInfo?.details 
                    ? activeInfo.details[0]?.title || "":
                    activeInfo?.detail?.title || "",
        linkedin: activeInfo?.detail?.linkedin || "",
        address: activeInfo?.detail?.address || "",
        github: activeInfo?.details 
                   ? activeInfo.details[0]?.github || "":
                    activeInfo?.detail?.github || "",
        email: activeInfo?.detail?.email || "",
        phone:  activeInfo?.detail?.phone || "",
        certificateLink: activeInfo?.details ? activeInfo.details[0]?.certificateLink || "" : "",
        link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
        points: activeInfo?.details 
                   ? activeInfo.details[0]?.points 
                      ? [...activeInfo.details[0]?.points] : "" 
                      : activeInfo?.points ? [...activeInfo.points] : "",
        description: activeInfo?.details ? activeInfo.details[0]?.description || "" : "",
        overview: activeInfo?.details ? activeInfo.details[0]?.overview|| "" : "",
        classCollege: activeInfo?.details ? activeInfo.details[0]?.classCollege|| "" : "",
        startDate: activeInfo?.details ? activeInfo.details[0]?.startDate || "" : "",
        endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
        college: activeInfo?.details ? activeInfo.details[0]?.college || "" : "",
        skill: activeInfo?.details ? activeInfo.details[0]?.skill || "" : "",
        language: activeInfo?.details ? activeInfo.details[0]?.language || "" : "",
        marks: activeInfo?.details ? activeInfo.details[0]?.marks || "" : "",
        companyName: activeInfo?.details ? activeInfo.details[0]?.companyName || "" : "",
        location: activeInfo?.details ? activeInfo.details[0]?.location || "" : "",
        });
    },[activeSectionKey]);

    useEffect(() => {
        setActiveInformation(information[sections[activeSectionKey]]);
    }, [information]);

    useEffect(() => {
        const details=activeInformation?.details;
        if(!details)
           return;

           const activeInfo = information[sections[activeSectionKey]];
        setValues({
        title: activeInfo.details[activeDetailIndex]?.title || "",
        github: activeInfo.details[activeDetailIndex]?.github || "",
        certificateLink: activeInfo.details[activeDetailIndex]?.certificateLink || "",
        link: activeInfo.details[activeDetailIndex]?.link || "",
        points:  activeInfo.details[activeDetailIndex]?.points ||  "",
        description: activeInfo.details[activeDetailIndex]?.description || "",
        overview:  activeInfo.details[activeDetailIndex]?.overview||  "",
        classCollege: activeInfo.details[activeDetailIndex]?.classCollege||  "",
        startDate:  activeInfo.details[activeDetailIndex]?.startDate ||  "",
        endDate:  activeInfo.details[activeDetailIndex]?.endDate ||  "",
        college: activeInfo.details[activeDetailIndex]?.college ||  "",
        skill:  activeInfo.details[activeDetailIndex]?.skill ||  "",
        language:  activeInfo.details[activeDetailIndex]?.language || "",
        marks:  activeInfo.details[activeDetailIndex]?.marks || "",
        companyName:  activeInfo.details[activeDetailIndex]?.companyName ||  "",
        location: activeInfo.details[activeDetailIndex]?.location || "",
        })
    }, [activeDetailIndex]);

    return(
    <div className='container'>
        <div className="header">
           {Object.keys(sections)?.map((key)=>(
               <div className={`${"section"} ${activeSectionKey===key ? "active": ""}`} key={key}
                onClick={()=> setActiveSectionKey(key)}>
                   {sections[key]}
                 </div>
           ))}
    </div>
    
        <div className="body">
            <div className='row'>
        <InputControl 
            label="Title" 
            placeholder="Enter section Title"
            value={sectionTitle}
            name="sectionTitle"
            onChange={(event) => setSectionTitle(event.target.value) }
        /></div>

            <div className='chips'>
                {activeInformation?.details ?
                    activeInformation?.details?.map((item, index)=> (
                        <div className={`${"chip"} ${activeDetailIndex===index ? "active": ""}`} 
                        key={item.title + index}
                         onClick={()=> setActiveDetailIndex(index)}>         
                        <p>
                            {sections[activeSectionKey]} {index + 1}
                        </p>
                        <i class="fa-solid fa-xmark" onClick={(event) =>{
                            event.stopPropagation();
                            handleDeleteNew(index);
                        }}/>
                    </div>
                    ))
                  : ""
                }
                {
                    activeInformation?.details && activeInformation?.details?.length > 0 ? (
                        <div className='new'
                             onClick={handleAddNew} > +New</div>
                    ) : ( "" )
                }
               
            </div>
            {generateBody()}
            <div className="click">
            <button onClick={handleSubmission} >Save</button>
            </div>
        </div>
    </div>
    )
}

export default Details;