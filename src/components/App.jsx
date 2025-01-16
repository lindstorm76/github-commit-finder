import React, { useRef, useState } from "react"
import Form from "./Form"
import Commits from "./Commits"
import Wrapper from "./Wrapper"

const App = () => {

  const [commits, setCommits] = useState(null)
  const [username, setUsername] = useState(null)
  const [repo, setRepo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [empty, setEmpty] = useState(false)
  const [repoLink, setRepoLink] = useState("<repo's link>")
  const [currentSha, setCurrentSha] = useState("<commit sha>")

  const commandRef = useRef(null)

  const padZeros = (str, len) => (
    String(str).length >= len ? str : String(str).padStart(len, '0')
  )

  const fetchLatestCommit = async (username, repo, date, time) => {
    setCommits(null)
    setNotFound(false)
    setLoading(true)

    const res = await fetch(`https://api.github.com/repos/${username}/${repo}/commits?until=${date}T${time}Z`, { 
      method: 'GET', 
      headers: new Headers({
        'Authorization': `token ${process.env.REACT_APP_TOKEN}`, 
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    })

    if (res.status === 404) {
      console.log('here')
      setNotFound(true)
      setLoading(false)
      setCommits([])
      setRepoLink("<repo's link>")
      setCurrentSha("<commit sha>")
      setTimeout(() => setNotFound(false), 5000)

      return
    }

    if (res.status !== 200) {
      setLoading(false)
      setEmpty(true)
      setRepoLink("<repo's link>")
      setCurrentSha("<commit sha>")
      setTimeout(() => setEmpty(false), 5000)
    } else {
      const data = await res.json()
      const fields = data[0].commit.url.split("/")
      
      setCommits(data)
      setUsername(fields[4])
      setRepo(fields[5])
      setRepoLink(`https://github.com/${username}/${repo}.git`)
    }

    setLoading(false)
  }

  if (commandRef.current !== null && !notFound) {
    commandRef.current.scrollIntoView()
  }

  return (
    <>
      <div className="w-100 col-xs-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column align-items-center justify-content-center pt-4">
        <h1 className="mt-2 mt-md-4" style={{ color: "#3B82F6" }}>Github Commit Finder</h1>
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center col-12 col-md-11 col-lg-10 col-xl-7">
          <Form fetchLatestCommit={fetchLatestCommit} notFound={notFound} empty={empty} padZeros={padZeros} />
          <div className="d-flex flex-column justify-content-center pt-4 px-4 col-12 col-sm-10 col-md-8 col-lg-6">
            <blockquote className="blockquote mb-2">
              <p>A commit card contains the followings</p>
            </blockquote>
            <div className="card mt-1 mb-2 mb-md-4 w-100" >
              <h5 className="card-header position-relative pt-4 px-2 text-center">
                <div style={{ top: -10, left: 10 }} className="position-absolute" >
                  <span style={{ backgroundColor: "#6B7280" }} className="badge">DateTime</span>
                  <span style={{ backgroundColor: "#EC4899" }} className="badge ms-2">Author</span>
                  <span style={{ backgroundColor: "#10B981" }} className="badge ms-2">Lastest?</span>
                </div>
                commit sha256
                <div style={{ top: -10, right: 10 }} className="position-absolute" >
                  <i className="far fa-copy copy" ></i>
                </div>
              </h5>
              <div className="card-body text-start d-flex flex-column">
                <p className="card-text">message</p>
                <button
                  className="btn align-self-end"
                  style={{ backgroundColor: "#3B82F6", color: "white", width: "fit-content", marginTop: "auto" }}
                >
                  Go to commit page
                </button>
              </div>
            </div>
            <blockquote ref={commandRef} className="blockquote mb-2">
              <p>Get a specific commit via</p>
            </blockquote>
            <pre>
              git clone <span className={repoLink === "<repo's link>" ? "" : "blink highlight"}>{repoLink}</span>
              <br />
              git checkout <span className={currentSha === "<commit sha>" ? "" : "blink highlight"}>{currentSha}</span>
            </pre>
          </div>
        </div>
      </div>
      <Commits
        notFound={notFound}
        loading={loading}
        commits={commits}
        username={username}
        repo={repo}
        setCurrentSha={setCurrentSha}
        commandRef={commandRef}
        padZeros={padZeros}
      />
      {loading && <Wrapper />}
    </>
  )
}

export default App