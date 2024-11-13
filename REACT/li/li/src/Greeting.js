import {useState} from "react";


const Greeting = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <input type='checkbox' checked={loggedIn} onChange={(e) => setLoggedIn(e.target.checked)}
      />

      {loggedIn ? <p>Welcome Back!</p> : <p>Please Login</p>}
    </div>
  )
}

export default Greeting;