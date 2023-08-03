import React, { useEffect, useState } from 'react'
import ContactTable from './ContactTable'
import AddContact from './AddContact'
import LogOut from '../login/LogOut'

const Home = () => {
    
  return (
    <div className='container container-fluide'>
        <h1 className='text-light bg-secondary'>The contact manager</h1>
        <div className='card'>
            <div className='mt-2'>
                <h3 className='text-muted'>All Contacts</h3>
            </div>
            <div>
                <ContactTable/>
            </div>
            <div>
                <AddContact/>
            </div>
        </div>
        <div>
            <LogOut/>
        </div>
    </div>
  )
}

export default Home