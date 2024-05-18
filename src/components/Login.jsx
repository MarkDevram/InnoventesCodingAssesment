import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function hadleLogin(e, userName, password) {
    e.preventDefault()
    console.log(userName, password)
    const credentials = {
      1: "1",
      Watto: "unknown",
    }
    if (credentials[userName] === password) {
      alert("Login Success")
      navigate("/planet")
    } else {
      alert("Invalid Login")
      setUsername("")
      setPassword("")
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          hadleLogin(e, userName, password)
        }}
      >
        <h2>Start Wars</h2>
        <label>Email</label>
        <input
          value={userName}
          type="text"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <br />
        <label>Password</label>
        <input
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
