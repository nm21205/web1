import React, {useContext} from 'react'
import { ThemeCountext } from '../context/ThemeCountext'

const Footer = () => {
  const {isDark, setIsDark} = useContext(ThemeCountext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  
  return (
    <footer
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
      }}
    >
      <button onClick="toggleTheme">Dark Mode</button>
    </footer>
  )
}

export default Footer
