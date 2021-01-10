import React from "react"

const Commit = ({ username, repo, commitSha, dateTime, message, latest }) => {
  
  const wrapWord = (word, len) => (
    word.length <= len ? word : word.substring(0, len) + "..."
  )

  return (
    <div className="card m-md-4 m-2" >
      <h5 className="card-header position-relative pt-4">
        <div style={{ top: -10, left: 10 }} className="position-absolute" >
          <span style={{ backgroundColor: "#6B7280" }} className="badge">{dateTime}</span>
          {latest && <span style={{ backgroundColor: "#10B981" }} className="badge ms-2">Latest</span>}
        </div>
        {commitSha}
      </h5>
      <div className="card-body text-start">
        <p className="card-text">{message}</p>
        <a
          target="_blank"
          href={`https://github.com/${username}/${repo}/commit/${commitSha}`}
          className="btn"
          style={{ backgroundColor: "#3B82F6", color: "white" }}
        >
          Commit page
        </a>
      </div>
    </div>
  )
}

export default Commit