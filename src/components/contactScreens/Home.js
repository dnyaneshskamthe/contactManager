import React, { useEffect, useState } from 'react'
import ContactTable from './ContactTable'
import AddContact from './AddContact'

const Home = () => {
    
  return (
    <div className='container container-fluide'>
        <div className=''>
            <h2>All Contacts</h2>
        </div>
        <div>
            <ContactTable/>
        </div>
        <div>
            <AddContact/>
        </div>
    </div>
  )
}

export default Home