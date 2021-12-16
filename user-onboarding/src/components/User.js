import React from "react";

function User({ details }) {
    if (!details) {
        return <h3>Ferching user&apos;s details...</h3>
    }
    return (
        <div className='user container'>
            <div className='img'>
                <img src={details.avatar} alt="No user image available" />
            </div>
            <h2>{details.first_name}</h2>
            <div className='info'>
                <p>Email: {details.email}</p>
                <p>Password: ****</p>
                
                {
                    !!details.termsOfService && !!details.termsOfService.length &&
                    <div>
                        TOS:
                        <ul>
                            {details.termsOfService.map((like, idx) => <li key={idx}>{like}</li>)}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default User