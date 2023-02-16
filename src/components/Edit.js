import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employe from './Employe';

function Edit() {
    const [id,setId]=useState('')
    const [empname,setEmpname]=useState('')
    const [age,setAge]=useState('')
    const [designation,setDesigantion]=useState('')
    const [salary,setSalary]=useState(0)


    useEffect(()=>{
        setId(localStorage.getItem('ID'))
        setEmpname(localStorage.getItem('NAME'))
        setAge(localStorage.getItem('AGE'))
        setDesigantion(localStorage.getItem('DESIGNATION'))
        setSalary(localStorage.getItem('SALARY'))
        
    },[])
    console.log(id);
    console.log(empname);

     var index = Employe.map(item=>item.id).indexOf(id)
     console.log(index);

     let history= useNavigate()

   const handleUpdate=(e)=>{
        e.preventDefault()//to avoid refreash
        console.log(e);//event
        let emp= Employe[index]
        console.log(emp);//full detail of employe
        emp.id=id
        emp.empname=empname
        emp.age=age
        emp.designation=designation
        emp.salary=salary
        console.log(emp);
        history('/')

    }



  return (
    <>
    
    <h1 className='text-center text-primary mt-5 mb-5' > Update Employe Management System</h1>
        <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>


        <Row>
            <Col md={4}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmoxegnTRQvTg5SS-B2DALIjTwJYTM7576nfvrtf008Lu6-RfPVFDDLWBJBIgsh5AAYY&usqp=CAU' className='m-5 p-5'></img>
            </Col>

            <Col md={7}>
            <Form className='border border-dark p-5'>
      <Form.Group className="mb-3">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Your ID" 
        value={id}
        onChange={(e)=>setId(e.target.value)}
        required
        />
        
      </Form.Group>

      
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" 
        value={empname}
        onChange={(e)=>setEmpname(e.target.value)}
        required
        />
        
      </Form.Group>

    
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Age" 
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        required/>
        
      </Form.Group>

      
      <Form.Group className="mb-3">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Designation" 
        value={designation}
        onChange={(e)=>setDesigantion(e.target.value)}
        required
        />
        
      </Form.Group>

    
      <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Salary" 
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        required/>
        
      </Form.Group>

      
      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
        Edit
      </Button>
    </Form>
            </Col>

            </Row>  
    </>


  )
}

export default Edit