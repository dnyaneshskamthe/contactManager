import React, { useRef, useState } from 'react'

const AddContact = () => {
    const [showForm, setShowForm] = useState(false)
    const [newContact, setNewContact] = useState({})
    const nameRef = useRef();
    const contactRef = useRef();

    const addUserContact = (e) => {    
        e.preventDefault();
        const postData = async () => {
          const uName = nameRef.current.value;
          const uContact = contactRef.current.value;

      
          // Basic validation - ensure name and contact are provided
          if (!uName || !uContact) {
            alert('Please provide name and contact.');
            return;
          }
      
          try {
            const response = await fetch("http://localhost:5000/api/v1/addUser", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name: uName, contact: uContact }),
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await response.json();
            console.log('User added:', data);
            // Do something with the response data if needed
          } catch (error) {
            console.error('Error adding user:', error);
            // Handle any errors that occurred during the fetch request
          }
        };
        postData()
    } 

    const handleAddContact = () =>{
        const x = document.getElementById('userForm');
        if(x.style.display === "none"){
            x.style.display = "block"
        }
        else{
            x.style.display = "none"
        }

    }
  return (
    <>
    <div className='add_contact'>
        <button className='btn btn-primary' onClick={handleAddContact}>Add new</button>
    </div>
    <div className='contactForm mt-4'>
    <form id="userForm">
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username :</label>
            <input type="text" ref = {nameRef} className="form-control" id="username"/>
        </div>
        <div className="mb-3">
            <label htmlFor="userContact" className="form-label">Contact :</label>
            <input type="text" ref = { contactRef } className="form-control" id="userContact"/>
        </div> 
        <button type="submit" className="btn btn-primary" onClick={addUserContact}>Submit</button>
    </form>
    </div>
    </>
  )
}

export default AddContact