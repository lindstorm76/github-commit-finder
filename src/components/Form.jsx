import React, { useState, useRef } from "react"

const Form = ({ fetchLatestCommit }) => {
  const padZeros  = (str, len) => (
    String(str).length >= len ? str : String(str).padStart(len, '0')
  )

  const now = new Date()
  const today = `${now.getFullYear()}-${padZeros(now.getMonth() + 1, 2)}-${padZeros(now.getDate(), 2)}`
  const current = `${padZeros(now.getHours(), 2)}:${padZeros(now.getMinutes(), 2)}`
  const [date, setDate] = useState(today)
  const [time, setTime] = useState(current)
  const usernameRef = useRef(null)
  const repoRef = useRef(null)

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { value: username } = usernameRef.current
    const { value: repo } = repoRef.current
    // usernameRef.current.value = ""
    // repoRef.current.value = ""
    setDate(today)
    const [hr, min] = time.split(":")
    fetchLatestCommit(username, repo, date, `${padZeros(+hr - 7, 2)}:${min}`)
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
        <input type="date" name="date" className="form-control mb-2" value={date} onChange={handleDateChange} />
        <input type="time" className="form-control" value={time} onChange={handleTimeChange} />
        <div id="emailHelp" className="form-text">All commits until {time}, {date}</div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Find</button>
      </div>
    </form>
  )
}

export default Form