import React, { useEffect, useState } from 'react'

const ContactTable = () => {
    const [contacts, setContacts] = useState()
    const [editingUserId, setEditingUserId] = useState(null);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedContact, setUpdatedContact] = useState('');

    //delete user logic
    const handleDelete = async (userId) =>{
        try {
            const deleteData = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/deleteUser`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id: userId }), // Send the user ID in the request body
            });
      
            if (!deleteData.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await deleteData.json();
            console.log('User deleted:', data);
            await fetchUpdatedData();
            // Do something with the response data if needed
          } catch (error) {
            console.error('Error deleting user:', error);
          }
    }
    // Function to start editing a user
    const startEdit = (user) => {
        setEditingUserId(user._id);
        setUpdatedName(user.name);
        setUpdatedContact(user.contact);
    };

    // Function to cancel editing and reset the input fields
    const cancelEdit = () => {
        setEditingUserId(null);
        setUpdatedName('');
        setUpdatedContact('');
    };

   // Function to handle the update button click
    const handleUpdate = async (userId) => {
    try {
      const updateData = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/editUser`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: userId,
            name: updatedName,
            contact: updatedContact,
          }),
        }
      );
      if (!updateData.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await updateData.json();
      console.log('User updated:', data);
      await fetchUpdatedData();
      // Reset editing state and input fields
      cancelEdit();
    } catch (error) {
      console.error('Error updating user:', error);
    }
    };

    //fetch updated data
    const fetchUpdatedData = async () =>{
        let response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/getUsers`,{
            method : 'GET',
            // mode :'CORS',
            headers:{
                'Access-Control-Allow-Origin':'*',
                "Access-Control-Allow-Credentials" : true 
            }
        })
        let actualData = await response.json();
        setContacts(actualData);
    }

    //to update page on state update
    useEffect(()=>{fetchUpdatedData();},[contacts])
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
            {contacts && contacts.map((item, index) => (
                <tr key={index}>
                <th scope="row">{index + 1}</th>
                {editingUserId === item._id ? (
                    <>
                    <td>
                        <input
                        type="text"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                        type="text"
                        value={updatedContact}
                        onChange={(e) => setUpdatedContact(e.target.value)}
                        />
                    </td>
                    <td>
                        <button onClick={() => handleUpdate(item._id)}>Update</button>
                        <button onClick={() => cancelEdit()}>Cancel</button>
                    </td>
                    </>
                ) : (
                    <>
                    <td>{item.name}</td>
                    <td>{item.contact}</td>
                    <td>
                        <span
                        className='text-primary'
                        id='editBtn'
                        onClick={() => startEdit(item)}
                        >
                        Edit
                        </span>{' '}
                        ||{' '}
                        <span
                        className='text-danger'
                        id='deleteBtn'
                        onClick={() => handleDelete(item._id)}
                        >
                        Delete
                        </span>
                    </td>
                    </>
                )}
                </tr>
            ))}
            </tbody>


        </table>
    </div>
  )
}

export default ContactTable