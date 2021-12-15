import React from 'react';

export default function UserForm(props) {
    const {
      values,
      submit,
      change,
      disabled,
      errors,
    } = props;
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'chackbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add New User</h2>
                <button disabled={disabled}>submit</button>
                <div classname='errors'>
                    <div>{errors.first_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfService}</div>
                </div>
            </div>
            <div className='form-group inputs'>
                <h4>General Info</h4>
                <lable>First Name
                    <input 
                    value={values.first_name}
                    onChange={onChange}
                    name='first name'
                    type='text'
                    />
                </lable>
                <lable>Email
                    <input 
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    />
                </lable>
                <lable>Password
                    <input 
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                    />
                </lable>
                <lable>Yes
                    <input
                        type='radio'
                        name='terms of service'
                        value='yes'
                        onChange={onChange}
                        checked={values.termsOfService === 'yes'}
                    />
                </lable>
                <lable>No
                    <input
                        type='radio'
                        name='terms of service'
                        value='no'
                        onChange={onChange}
                        checked={values.termsOfService === 'no'}
                    />
                </lable>
            </div>
        </form>
    );
}