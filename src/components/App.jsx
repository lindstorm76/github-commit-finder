import React, { useState, useEffect } from "react"
import Form from "./Form"
import Commits from "./Commits"
import Commit from "./Commit"

const App = () => {

  const [commits, setCommits] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchLatestCommit = async (username, repo, date) => {
    setLoading(true)
    const res = await fetch(`https://api.github.com/repos/${username}/${repo}/commits?until=${date}T23:59:59`, { 
      method: 'GET', 
      headers: new Headers({
        'Authorization': `token ${process.env.REACT_APP_TOKEN}`, 
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    })
    // https://github.com/Pichat-pamb/6130400647-java-labs.git
    const data = await res.json()
    setCommits(data)
    setLoading(false)
  }
  if (loading) return <h1>Loading...</h1>
  return (
    <>
      <div className="col-xs-12 col-md-6 col-lg-4 col-xl-3 container d-flex flex-column align-items-center justify-content-center pt-4">
        <h1 className="mt-4">Github Commit Finder</h1>
        <Form fetchLatestCommit={fetchLatestCommit} />
      </div>
      {commits && <Commits commits={commits} />}
    </>
  )
}

export default App