import React, {useContext} from 'react'
import { ThemeCountext } from '../context/ThemeCountext'
import { UserContext } from '../context/UserContext';


const Header = () => {

  const {isDark} = useContext(ThemeCountext);
  
  const user = useContext(UserContext)
  return (
    <header className='header'
    style={{
      backgroundColor:isDark ? 'black' : 'lightgray',
      color: isDark ? 'whithe' :'black'
    }}>
  
    </header>
  )
}

export default Header
