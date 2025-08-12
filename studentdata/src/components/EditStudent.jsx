import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  const {studentid}= useParams();
  const [id, setId]=useState("");
  const [name, setName]=useState("");
  const [place, setPlace]=useState("");
  const [phone, setPhone]=useState("");
  const [validation,setValidation]= useState(true)
  const navigate= useNavigate();
  // const [studentData,setStudentData]=useState({});
  useEffect(()=>{
fetch("http://localhost:8000/students/" + studentid)
.then((res)=>res.json())
.then((data)=>{
  setId(data.id)
  setName(data.name)
  setPlace(data.place)
  setPhone(data.phone)
  

})
.catch((err)=>console.log(err.message))
  },[]);
  const handleSubmit = (e)=>{
    e.preventDefault();

    const studentData={id,name,place,phone};
    console.log(studentData);
    
    fetch("http://localhost:8000/students/" +studentid, {
        method:'PUT',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(studentData)

        
    })
    .then((res)=>
    {
        alert("Student Data updated successfully");
        navigate("/");
    })
    .catch((err)=>console.log(err.message ))
}
  return (
  <>
   <div className="container">
    <h2>Edit Student Details</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor='id'>ID:</label>
        <input type="text" id='id' name='id' required value={id} onChange={e=>setId(e.target.value)} onMouseDown={()=>setValidation(true)} />
        {id.length===0 && validation && <span className='err'>Please Enter your id</span>}

        <label htmlFor='name'>Name:</label>
        <input type="text" id='name' name='name' required value={name} onChange={(e)=>setName(e.target.value)} onMouseDown={()=>setValidation(true)}/>
        {name.length===0 && validation && <span className='err'>Please Enter your name</span>}

        <label htmlFor='place'>Place:</label>
        <input type="text" id='place' name='place' required value={place} onChange={(e)=>setPlace(e.target.value)} onMouseDown={()=>setValidation(true)}/>
        {place.length===0 && validation && <span className='err'>Please Enter your place</span>}

        <label htmlFor='phone'>Phone:</label>
        <input type="text" id='phone' name='phone' required value={phone} onChange={(e)=>setPhone(e.target.value)} onMouseDown={()=>setValidation(true)}/>
        {phone.length===0 && validation && <span className='err'>Please Enter your mobile number</span>}

       <div>
       <button className='btn btn-save'>Update</button>
       <Link to="/" className='btn btn-back' >Back</Link>
       </div>
    </form>
   </div>
  </>
  )
}

export default EditStudent
