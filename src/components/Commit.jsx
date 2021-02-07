import React from "react"

const Commit = ({ username, repo, commitSha, dateTime, author, message, latest, setCurrentSha, commandRef }) => {
  const handleCopy = () => {
    setCurrentSha(commitSha)
    commandRef.current.scrollIntoView()
  }
  return (
    <div className="card mb-4 mx-2 m-lg-3" style={{ width: "28rem" }} >
      <h5 className="card-header position-relative pt-4 px-1">
        <div style={{ top: -10, left: 10 }} className="position-absolute" >
          <span style={{ backgroundColor: "#6B7280" }} className="badge">{dateTime}</span>
          {author && <span style={{ backgroundColor: "#EC4899" }} className="badge ms-2">{author}</span>}
          {latest && <span style={{ backgroundColor: "#10B981" }} className="badge ms-2">Latest</span>}
        </div>
        {commitSha}
        <div style={{ top: -10, right: 10 }} className="position-absolute" >
          <i className="far fa-copy copy" onClick={handleCopy} ></i>
        </div>
      </h5>
      <div className="card-body text-start d-flex flex-column">
        <p className="card-text">{message}</p>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${username}/${repo}/commit/${commitSha}`}
          className="btn align-self-end"
          style={{ backgroundColor: "#3B82F6", color: "white", width: "fit-content", marginTop: "auto" }}
        >
          Go to commit page
        </a>
      </div>
    </div>
  )
}

export default Commit