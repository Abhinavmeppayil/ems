import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import Employe from './Employe';
import uuid from 'react-uuid';
// import Employe from './Employe';

function Add() {

    const [id,setId]=useState('')
    const [empname,setEmpname]=useState('')
    const [age,setAge]=useState('')
    const [designation,setDesigantion]=useState('')
    const [salary,setSalary]=useState(0)
    console.log(id
        );

    const history= useNavigate()

    const handleAdd=(e)=>{
        // e.priventDefault();
        let ids =uuid();
        console.log(ids)

        let uniqueId = ids.slice(0,8)
        console.log(uniqueId);

          

        Employe.push({
            id:uniqueId,
            empname:empname,
            age:age,
            designation:designation,
            salary:salary
        })
        history('/')

    }

  return (
    <>

<h1 className='text-center text-primary mt-5 mb-5' > Add Employe Management System</h1>
        <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>


        <Row>
            <Col md={4}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmoxegnTRQvTg5SS-B2DALIjTwJYTM7576nfvrtf008Lu6-RfPVFDDLWBJBIgsh5AAYY&usqp=CAU' className='m-5 p-5' alt=''></img>
            </Col>

            <Col md={7}>
            <Form className='border border-dark p-5'>
      <Form.Group className="mb-3">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Your ID" 
        // value={id}
        onChange={(e)=>setId(e.target.value)}
        required
        />
        
      </Form.Group>

      
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" 
        // value={empname}
        onChange={(e)=>setEmpname(e.target.value)}
        required
        />
        
      </Form.Group>

    
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Age" 
        // value={age}
        onChange={(e)=>setAge(e.target.value)}
        required/>
        
      </Form.Group>

      
      <Form.Group className="mb-3">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Designation" 
        // value={designation}
        onChange={(e)=>setDesigantion(e.target.value)}
        required
        />
        
      </Form.Group>

    
      <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Salary" 
        // value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        required/>
        
      </Form.Group>

      
      <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
        Add
      </Button>
    </Form>
            </Col>

            </Row>  
    </>
  )
}

export default Add