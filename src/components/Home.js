import React from 'react';
import Employe from  './Employe'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import {FaUserEdit ,FaUserTimes,FaUserPlus} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';




function Home() {
    const history = useNavigate()
    const handleDelete=(id)=>{
        // alert('Delete')
        var index =Employe.map(item=>item.id).indexOf(id)//index
        Employe.splice(index,1)//remove
        console.log(Employe);//array position with remaining elemet
        history('/')//refresh
    }
    const handleEdit=(id,empname,age,designation,salary)=>{
        localStorage.setItem("ID",id);
        localStorage.setItem("NAME",empname);
        localStorage.setItem("AGE",age)
        localStorage.setItem("DESIGNATION",designation);
        localStorage.setItem("SALARY",salary);






    }
  return (
    <div>
        <h1 className='text-center text-primary mt-5 mb-5' >Employe Management System</h1>
        <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
          
          
          <Link to={'/add'}>
           <Button className='mt-5 mb-5' variant="success">Add<FaUserPlus/></Button>
           </Link>

        <h3 className='mb-5'>
            List Of Employe
        </h3>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Employe  Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {
            Employe && Employe.length>0?
            Employe.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.empname}</td>
                    <td>{item.age}</td>
                    <td>{item.designation}</td>
                    <td>{item.salary}</td>
                    <td><Link to={'/edit'}><Button variant="primary" className='me-2'  onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)}><FaUserEdit/></Button></Link>
                    <Button onClick={()=>handleDelete(item.id)} variant="danger"><FaUserTimes/></Button></td>




                </tr>
            )):'No Data Available'
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Home