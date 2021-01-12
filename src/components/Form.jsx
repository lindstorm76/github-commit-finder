import React, { useState, useRef } from "react"

const Form = ({ fetchLatestCommit, notFound, empty, padZeros }) => {

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
    setDate(today)
    const [hr, min] = time.split(":")
    const GMT0 = new Date(`${date}T${hr}:${min}:00+14:00`)
    const centralDate = `${GMT0.getFullYear()}-${padZeros(GMT0.getMonth() + 1, 2)}-${padZeros(GMT0.getDate(), 2)}`
    const centralTime = `${padZeros(GMT0.getHours(), 2)}:${padZeros(GMT0.getMinutes(), 2)}:00`
    fetchLatestCommit(username, repo, centralDate, centralTime)
  }
  
  return (
    <form className="col-11 col-sm-9 col-md-8 col-lg-6" onSubmit={handleSubmit}>
      {notFound && <div className="alert alert-danger" role="alert">Username or repository not found</div>}
      {empty && <div className="alert alert-danger" role="alert">No commits found before that particular date and time</div>}
      <div className="mb-3">
        <label htmlFor="" className="form-label">Username</label>
        <input type="text" className="form-control" aria-describedby="username" ref={usernameRef} required />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Repository name</label>
        <input type="text" className="form-control" aria-describedby="repository's name" ref={repoRef} required />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Until</label>
        <input type="date" name="date" className="form-control mb-2" aria-describedby="date" value={date} onChange={handleDateChange} required />
        <input type="time" className="form-control" aria-describedby="time" value={time} onChange={handleTimeChange} required />
        <div className="form-text">All commits until {time}, {date}</div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Find</button>
      </div>
    </form>
  )
}

export default Form