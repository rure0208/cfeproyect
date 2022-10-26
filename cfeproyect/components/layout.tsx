/**class that contains page header and condition to show pages, when you have a registered session */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router'


const Layout = () => {
  const router = useRouter();
    const [show, setShow] = useState(false);

   

    
  return (
    <div>
    
    </div>
  )
}


export default Layout
