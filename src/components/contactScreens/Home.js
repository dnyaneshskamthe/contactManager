import React, { useEffect, useState } from 'react'
import ContactTable from './ContactTable'
import AddContact from './AddContact'

const Home = () => {
    const contacts = [
        {'name':'Abhishek','contact':'1234567890'},
        {'name':'Aniket','contact':'0134512451'},
        {'name':'Bhushan','contact':'0987654321'}
    ]
    const [userContacts, setUserContacts] = useState([])
    useEffect(()=>{
        const getAllUsers = async () =>{
            let response = await fetch('http://localhost:5000/api/v1/getUsers',{
                method : 'GET',
                // mode :'CORS',
                headers:{
                    'Access-Control-Allow-Origin':'*',
                    "Access-Control-Allow-Credentials" : true 
                }
            })
            let actualData = await response.json();
            setUserContacts(actualData);
        }
        getAllUsers();
    },[])
  return (
    <div className='container container-fluide'>
        <div className=''>
            <h2>All Contacts</h2>
        </div>
        <div>
            <ContactTable contacts = {userContacts}/>
        </div>
        <div>
            <AddContact/>
        </div>
    </div>
  )
}

export default Home