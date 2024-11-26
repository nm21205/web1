import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import React from 'react'

const Page1 =  ({isDark, setIsDark}) => {

  
  return (
    <div className='Page'>
      <Header />
      <Content />
      <Footer />

    </div>
  )
}

export default Page1

