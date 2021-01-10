import React from "react"

const Commit = ({ username, commitSha, dateTime, message, latest }) => {
  
  const wrapWord = (word, len) => (
    word.length <= len ? word : word.substring(0, len) + "..."
  )

  return (
    <div className="card m-4">
      <h5 className="card-header position-relative pt-4">
        <div style={{ top: -10, left: 10 }} className="position-absolute" >
          <span style={{ backgroundColor: "#3B82F6" }} className="badge">{username}</span>
          <span style={{ backgroundColor: "#EF4444" }} className="badge ms-2">repo</span>
          {latest && <span style={{ backgroundColor: "#10B981" }} className="badge ms-2">Latest</span>}
        </div>
        <span>{commitSha}</span>
      </h5>
      <div className="card-body">
        <h5 className="card-title text-muted">{dateTime}</h5>
        <p className="card-text">{wrapWord(message, 50)}</p>
        <a target="_blank" href={`https://github.com/lindstorm75/dota2heroes/commit/${commitSha}`} className="btn btn-primary">Commit page</a>
      </div>
    </div>
  )
}

export default Commit