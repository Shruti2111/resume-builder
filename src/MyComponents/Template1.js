import React, { forwardRef, useRef, useState, useEffect } from "react";
import User_Template1 from '../asset/resumephoto5.jpg';
import './Template1.css';

const Template1 = forwardRef((props,ref) => {
  const information=props.information;
  const sections=props.sections;
  
  const [image,setImage] = useState({
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  })
  
  
  const [column, setColumn] = useState([[], []]);

  const info ={
    basicInfo: information[sections.basicInfo],
    workExp: information[sections.workExp],
    project: information[sections.project],
    education: information[sections.education],
    skills: information[sections.skills],
    lang: information[sections.lang],
    certificate: information[sections.certificate],
    achievements: information[sections.achievements],
    other: information[sections.other],
  };

  //  const reader = new FileReader();
  // const filename= reader.readAsDataURL(info.other?.detail?.file)
// console.log(filename);
  const getFormattedDate = (value)=>{
    if(!value)
      return "";
    const date= new Date(value);

    return `${date.getDate()}/${
      (date.getMonth() + 1)>9? (date.getMonth() + 1):"0" + (date.getMonth()+1)}/${date.getFullYear()}`
  };

  const sectionDiv={
    [sections.workExp]:
    <div key={"workexp"} className={`${"section workExp"} $(info.workExp?.sectionTitle ? "": "hidden")`}>

    <div className="sectionTitle">{info.workExp?.sectionTitle}</div>
    <div className="content">
      {info.workExp?.details?.map((item) => (
      <div className="item" key={item.title}>
      {
        item.title &&
        <p className="title">{item.title}</p>
      }
      {
        item.companyName &&
        <p className="subTitle">{item.companyName}</p>
      }
      {
        item.certificate &&
        <a className="link" href={item.certificate}>
          <i class="fa-solid fa-paperclip"></i>{item.certificate}</a>
      }
      {
        item.startDate && item.endDate ?(
        <div className="date">
          <i class="fa-solid fa-calendar-days"></i>
        {getFormattedDate(item.startDate)}-{getFormattedDate(item.endDate)}
      </div>
        ):""
      }
      {
        item.location &&
        <p className="date">
          <i class="fa-solid fa-location-dot"></i>{item.location}</p>
      }
      {
        item.points?.length > 0 && (
        <ul className="points">
          {item.points?.map((elem,index) => (
               <li className="point" key={elem + index}>{elem}</li>
          ))}
      </ul>
        )}
      </div>
        ))}
    </div>
  </div>,

    [sections.project]:
    <div key={"project"} className={`${"section project"} $(info.project?.sectionTitle ? "": "hidden")`}>
      <div className="sectionTitle">{info.project?.sectionTitle}</div>
      <div className="content">
      {info.project?.details?.map((item) => (
        <div className="item" key={item.title}>
      {
        item.title &&
        <p className="title">{item.title}</p>
      }
      {
        item.overview &&
        <p className="overview">{item.overview}</p>
      }
          {
        item.link &&
        <a className="link" href={item.link}>
          <i class="fa-solid fa-paperclip"></i>{item.link}</a>
      }
           {
              item.github &&     
            <a className="link" href={item.github}>
            <i class="fa-brands fa-github" />  {item.github} </a>
            }
          {
        item.points?.length > 0 && (
        <ul className="points">
          {item.points?.map((elem,index) => (
               <li className="point" key={elem + index}>{elem}</li>
          ))}
      </ul>
        )}
        </div>
      ))}
      </div>
    </div>,

    [sections.education]:
    <div key={"education"} className={`${"section education"} $(info.education?.sectionTitle ? "": "hidden")`}>
    <div className="sectionTitle">{info.education?.sectionTitle}</div>
    <div className="content">
      {info.education?.details?.map((item) => (
      <div className="item">
      {
        item.college &&
        <p className="title">{item.college}</p>
      }
         {
        item.classCollege &&
        <p className="subTitle">{item.classCollege}</p>
      }
        {
        item.startDate && item.endDate ?(
        <div className="date">
          <i class="fa-solid fa-calendar-days"></i>
        {getFormattedDate(item.startDate)}-{getFormattedDate(item.endDate)}
      </div>
        ):""
      } 
      {
        item.marks &&
        <p className="overview">{item.marks}</p>
      }
      </div>
      ))}
    </div>
  </div>,

    [sections.skills]:
    <div key={"skill"} className={`${"section skill"} $(info.skills?.sectionTitle ? "": "hidden")`}>
    <div className="sectionTitle">{info.skills?.sectionTitle}</div>
    <div className="content">
      {info.skills?.details?.map((item) => (
      <div className="item">
       {
          item.skill && 
        <ul className="point">
          <li className="point1">{item.skill}</li>
        </ul>
        }
      </div>
      ))}
    </div>
  </div>,

    [sections.lang]:
    <div key={"lang"} className={`${"section lang"} $(info.lang?.sectionTitle ? "": "hidden")`}>
    <div className="sectionTitle">{info.lang?.sectionTitle}</div>
    <div className="content">
    {info.lang?.details?.map((item) => (
      <div className="item">
        {
          item.language && 
        <ul className="point">
          <li className="point1">{item.language}</li>
        </ul>
        }
      </div>
    ))}
    </div>
  </div>,

    [sections.certificate]:
    <div key={"certificate"} className={`${"section certificate"} $(info.certificate?.sectionTitle ? "": "hidden")`}>
    <div className="sectionTitle">{info.certificate?.sectionTitle}</div>
    <div className="content">
    {info.certificate?.details?.map((item) => (
      <div className="item">
       {
        item.description &&
        <p className="overview">{item.description}</p>
      }
      {
        item.certificateLink &&
        <a className="link" href={item.certificateLink}>
          <i class="fa-solid fa-paperclip"></i>{item.certificateLink}</a>
      }
      </div>
    ))}
    </div>
  </div>,

    [sections.achievements]:
    <div key={"achievements"} className={`${"section achievements"} $(info.achievements?.sectionTitle ? "": "hidden")`}>
    <div className="sectionTitle">{info.achievements?.sectionTitle}</div>
    <div className="content">
    {info.achievements?.points?.length > 0 && (
    <ul className="numbered">
      {info.achievements?.points?.map((elem, index) => (
    <li className="point" key={elem+index}>{elem}</li>
      ))}
    </ul>
    )}
    </div>
  </div>,

  // [sections.other]:
  // <div key={'other'} >
  //       <img src={image.profileImg}  className="temp1_img" id="imgTemplate"/>
  // </div>
  };
   
 
  useEffect(() => {
    setColumn([
      [
        sections.other,
        sections.skills,
        sections.lang,
        sections.achievements,
        sections.certificate,
      ], [
        sections.education,
        sections.workExp,
        sections.project,
      
      ]
    ])
    
  });

  //  useEffect(() => {

  // const objectUrl = URL.createObjectURL(info.other?.detail?.file.name)
  //       setImage({ profileImg:objectUrl})
  //       console.log(objectUrl);
  // },[info.other?.detail?.file.name])

  const readfileimg =() =>{
    let reader=new FileReader()
    reader.readAsDataURL(info.other?.detail?.file);
  
     console.log(reader.result);
     reader.onloadend = function() {
        document.getElementById("imgTemplate").src = reader.result};
    //  setImage({profileImg: URL.createObjectURL(info.other?.detail?.file.name)})
    
  }
   


  return (
    <div ref={ref}>
    <div  className="container">
      <div className="main1">
        <div className="col1">
      {/* <div>{info.other?.detail?.file.name}</div> */}
         { readfileimg}
          <img src={image.profileImg} id="imgTemplate" alt="user" className="temp1_img" />
          <div className="links1">
            {
             info.basicInfo?.detail?.email && 
                <a className="link" type="email">
                  <i class="fa-solid fa-envelope" />
                   {info.basicInfo?.detail?.email}</a> 
            }
            {
               info.basicInfo?.detail?.address && 
              <p className="link">
              <i class="fa-solid fa-location-dot" />  {info.basicInfo?.detail?.address} </p>
            }
            {
               info.basicInfo?.detail?.phone && 
               <p className="link" type="tel" >
               <i class="fa-solid fa-phone"></i>  {info.basicInfo?.detail?.phone}</p>
            }
            {
               info.basicInfo?.detail?.linkedin && 
              <a className="link">
              <i class="fa-brands fa-linkedin" />  {info.basicInfo?.detail?.linkedin} </a>
            }
            {
              info.basicInfo?.detail?.github &&     
            <a className="link">
            <i class="fa-brands fa-github" />  {info.basicInfo?.detail?.github}</a>
            }
          </div>

          {column[0].map((item) =>sectionDiv[item])}
        </div>

        <div className="col2">
          <div className="header1">
            {
               info.basicInfo?.detail?.fname && info.basicInfo?.detail?.lname ? (
                <div className="heading1">
               {info.basicInfo?.detail?.fname} {info.basicInfo?.detail?.lname}  
                </div> ): ""
            }
            
            {
              info.basicInfo?.detail?.title && 
              <div className="subHeading1">{info.basicInfo?.detail?.title}</div>
            }
            
          </div>
          {column[1].map((item) =>sectionDiv[item])}
        </div>
      </div>

    </div>
    </div>
  );
});

export default Template1;
