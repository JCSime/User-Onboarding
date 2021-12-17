import React from 'react';

export default function UserForm(props) {
    const {
      values,
      submit,
      change,
      disabled,
      errors,
    } = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add New User</h2>
                <button className='submitBtn' disabled={disabled}>submit</button>
                <div className='errors'>
                    <div>{errors.first_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfService}</div>
                </div>
            </div>
            <div className='form-group inputs'>
                <h4>General Info</h4>
                <label>First Name
                    <input 
                    value={values.first_name}
                    onChange={onChange}
                    name='first_name'
                    type='text'
                    />
                </label>
                <label>Email
                    <input 
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    />
                </label>
                <label>Password
                    <input 
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                    />
                </label>
                <label>Terms of Service
                    <input
                        type='checkbox'
                        name='termsOfService'
                        checked={values.accept}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    );
}