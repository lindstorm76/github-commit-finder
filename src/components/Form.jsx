import React, { useState, useRef } from "react"

const Form = ({ fetchLatestCommit }) => {
  const now = new Date()

  const padZeros  = (str, len) => (
    String(str).length >= len ? str : String(str).padStart(len, '0')
  )

  const [date, setDate] = useState(`${now.getFullYear()}-${padZeros(now.getMonth() + 1, 2)}-${now.getDate()}`)
  const usernameRef = useRef(null)
  const repoRef = useRef(null)

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { value: username } = usernameRef.current
    const { value: repo } = repoRef.current
    fetchLatestCommit(username, repo, date)
  }
  
  return (
    <form className="mt-4 w-100" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Username</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={usernameRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Repository name</label>
        <input type="text" className="form-control" ref={repoRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Until</label>
        <input type="date" name="date" className="form-control" value={date} onChange={handleDateChange} />
        <div id="emailHelp" className="form-text">All commits until 23:59:59, {date}</div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Find</button>
      </div>
    </form>
  )
}

export default Form