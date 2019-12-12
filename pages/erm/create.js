import React, { useState } from 'react'
import Prototype from '../../components/prototype'
import { gql } from 'apollo-boost'
import {  Mutation } from "react-apollo"
import Router from 'next/router'



const CREATE_EMPLOYEE = gql`
  mutation createEmployee($input: EmployeeInput!){
    createEmployee(input: $input){
      _id
    }
  }
`

const GOTO2 = () =>{
  
  Router.push("/erm/index")
  window.location.reload(); 
}
const Form = () => {

  const [Firstname, setfirstname] = useState('')
  const [Lastname, setlastname] = useState('')
  const [Extension, setextension] = useState('')
  const [Email, setemail] = useState('')
  const [Password, setpassword] = useState('')
  const [Officecode, setofficecode] = useState('')
  const [Jobtitle, setjobtilte] = useState('')
  

  // console.log(firstname)
  return(

    <>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">NAME</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setfirstname(event.target.value)} class="input" type="text" placeholder="Firstname" />
        </div>
        <div class="field">
          <input onChange={event => setlastname(event.target.value)} class="input" type="text" placeholder="Lastname"  />
        </div>
      </div>
    </div>


    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">EXTENSION</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setextension(event.target.value)} class="input" type="text" placeholder="Extension" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">EMAIL</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setemail(event.target.value)} class="input" type="text" placeholder="Employee email" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">PASSWORD</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setpassword(event.target.value)} class="input" type="text" placeholder="Enter Password" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">OFFICE CODE</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setofficecode(event.target.value)} class="input" type="text" placeholder="Employee's Office code" />
        </div>
      </div>
    </div>


    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">JOB TITLE</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setjobtilte(event.target.value)} class="input" type="text" />
        </div>
      </div>
    </div>


    

  <Mutation mutation={CREATE_EMPLOYEE}>
    {(createEmployee, { data, loading, error }) => (
      <div>
        <form onClick={e =>{
          e.preventDefault();
          createEmployee({variables: {input: { 
            firstName: Firstname, 
            lastName: Lastname, 
            extension: Extension,
            email: Email,
            password: Password,
            officeCode: Officecode,
            jobTitle: Jobtitle
            
          }}})
        }}
>
<div className="field is-grouped is-grouped-centered">
      <p className="control">
        <a className="button is-primary" type="submit">CREATE</a>
        {loading &&
      <div>adding person…</div>
      }
      { data &&
      GOTO2()
      }
      { error &&
      <div>Error adding person…</div>
      }
      </p>
      <p className="control">
        <a className="button is-light" onClick={GOTO2}>CANCEL</a>
      </p>
    </div>
</form>
      </div>
    )
    }
    
    
    </Mutation>   
 

  </>

)
}

const CreateEmployee = () => (
  <Prototype title="CREATE EMPLOYEE">
    <Form />
  </Prototype>
)


export default CreateEmployee