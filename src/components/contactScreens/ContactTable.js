import React, { useState } from 'react'

const ContactTable = (props) => {
    const [contact, setContact] = useState([])
  return (
    <div className='container-fluide'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map((item, index) => (
                    <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.contact}</td>
                    <td><span className='text-primary'>Edit</span> || <span className='text-danger'>Delete</span></td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}

export default ContactTable