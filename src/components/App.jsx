import React, { useState } from "react"
import Form from "./Form"
import Commits from "./Commits"

const App = () => {

  const [commits, setCommits] = useState(null)
  const [username, setUsername] = useState(null)
  const [repo, setRepo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const fetchLatestCommit = async (username, repo, date, time) => {
    setCommits(null)
    setNotFound(false)
    setLoading(true)
    setUsername(username)
    setRepo(repo)
    const res = await fetch(`https://api.github.com/repos/${username}/${repo}/commits?until=${date}T${time}:00Z`, { 
      method: 'GET', 
      headers: new Headers({
        'Authorization': `token ${process.env.REACT_APP_TOKEN}`, 
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    })
    const data = await res.json()
    if (data.message === "Not Found") {
      setNotFound(true)
      setTimeout(() => setNotFound(false), 3000)
      return
    }
    setCommits(data)
    setLoading(false)
  }
  return (
    <>
      <div className="w-100 col-xs-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column align-items-center justify-content-center pt-4">
        <h1 className="mt-4">Github Commit Finder</h1>
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center col-12 col-md-11 col-lg-10 col-xl-6">
          <Form fetchLatestCommit={fetchLatestCommit} notFound={notFound} />
          <div className="my-4 d-flex flex-column justify-content-center py-2 px-4 col-12 col-sm-10 col-md-8 col-lg-6">
            <blockquote className="blockquote mb-2">
              <p>A commit card contains the followings</p>
            </blockquote>
            <div className="card mt-1 mb-2 mb-md-4 w-100" >
              <h5 className="card-header position-relative pt-4 px-2 text-center">
                <div style={{ top: -10, left: 10 }} className="position-absolute" >
                  <span style={{ backgroundColor: "#6B7280" }} className="badge">date time</span>
                  <span style={{ backgroundColor: "#10B981" }} className="badge ms-2">Lastest?</span>
                </div>
                commit sha <i className="far fa-copy copy" ></i>
              </h5>
              <div className="card-body text-start">
                <p className="card-text">commit message</p>
                <button
                  className="btn"
                  style={{ backgroundColor: "#3B82F6", color: "white" }}
                >
                  Commit page
                </button>
              </div>
            </div>
            <blockquote className="blockquote mb-2">
              <p>Get a specific commit via</p>
            </blockquote>
            <pre>
              {`git clone <repo's link>`}
              <br />
              {`git checkout <commit sha>`}
            </pre>
          </div>
        </div>
      </div>
      <Commits notFound={notFound} loading={loading} commits={commits} username={username} repo={repo} />
    </>
  )
}

export default App