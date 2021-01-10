import React, { useState, useEffect } from "react"
import Form from "./Form"
import Commits from "./Commits"

const App = () => {

  const [commits, setCommits] = useState(null)
  const [username, setUsername] = useState(null)
  const [repo, setRepo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const fetchLatestCommit = async (username, repo, date) => {
    setNotFound(false)
    setLoading(true)
    setUsername(username)
    setRepo(repo)
    const res = await fetch(`https://api.github.com/repos/${username}/${repo}/commits?until=${date}T23:59:59`, { 
      method: 'GET', 
      headers: new Headers({
        'Authorization': `token ${process.env.REACT_APP_TOKEN}`, 
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    })
    const data = await res.json()
     if (data.message === "Not Found") return setNotFound(true)
    setCommits(data)
    setLoading(false)
  }
  return (
    <>
      <div className="col-xs-12 col-md-6 col-lg-4 col-xl-3 container d-flex flex-column align-items-center justify-content-center pt-4">
        <h1 className="mt-4">Github Commit Finder</h1>
        <Form fetchLatestCommit={fetchLatestCommit} />
      </div>
      <Commits notFound={notFound} loading={loading} commits={commits} username={username} repo={repo} />
    </>
  )
}

export default App