import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import User from './User';
import UserForm from './UserForm';
import schema from '../validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  termsOfService: false,
}
const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(resp => {
      setUsers(resp.data.data);
    }).catch(err => console.error(err))
  }
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(resp => {
      setUsers([ resp.data, ...users ]);
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(()=> setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err=> setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }
  const formSubmit = () => {
    const newUser ={
      first_name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: ['accept'].filter(tos => !!formValues[tos])
    }
    postNewUser(newUser);
  }
  useEffect(() => {
    getUsers()
  }, [])
  useEffect(() =>{
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  return (
    <div className="App">
      <header><h1>User List</h1></header>
      <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

