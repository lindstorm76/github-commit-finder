import React from "react"
import Commit from "./Commit"

const Commits = ({ notFound, commits, username, repo, setCurrentSha, commandRef, padZeros }) => {

  if (commits === null) return null

  if (notFound || commits.length === 0) return null

  const commitCards = commits.map((commit, index) => {
    const commitUrl = commit.commit.url.split("/")
    const message = commit.commit.message.split("\n")[0]
    const author = commit.author === null ? null : commit.author.login
    const commitSha = commitUrl[commitUrl.length - 1]
    const GMT0 = commit.commit.committer.date.replace("Z", "+00:00")
    const GMT7 = new Date(GMT0)
    const date = `${GMT7.getFullYear()}-${padZeros(GMT7.getMonth() + 1, 2)}-${padZeros(GMT7.getDate(), 2)}`
    const time = `${padZeros(GMT7.getHours(), 2)}:${padZeros(GMT7.getMinutes(), 2)}:${padZeros(GMT7.getSeconds(), 2)}`
    
    return (
      <Commit
        key={`commit_${index}:${commit.commit.committer.date}`}
        username={username}
        repo={repo}
        commitSha={commitSha}
        dateTime={`${date} ${time}`}
        message={message}
        author={author}
        latest={index === 0}
        setCurrentSha={setCurrentSha}
        commandRef={commandRef}
      />
    )
  })
  
  return (
    <div>
      <h2 className="d-flex justify-content-center align-items-center flex-column flex-md-row mb-4">
        <span className="mx-0 mx-sm-2 my-2 my-sm-0">User: <span className="badge" style={{ backgroundColor: "#8B5CF6" }} >{username}</span></span>
        <span>Repository: <span className="badge" style={{ backgroundColor: "#EF4444" }}>{repo}</span></span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center mt-md-4">
        {commitCards}
      </div>
    </div>
  )
}

export default Commits