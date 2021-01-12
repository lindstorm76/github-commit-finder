import React from "react"
import Commit from "./Commit"

const Commits = ({ notFound, commits, username, repo, setCurrentSha, commandRef, padZeros }) => {

  if (commits === null) return null

  if (notFound || commits.length === 0) return null

  const commitCards = commits.map((commit, index) => {
    const commitUrl = commit.commit.url.split("/")
    const message = commit.commit.message.split("\n")[0]
    const commitSha = commitUrl[commitUrl.length - 1]
    const rawDateTime = commit.commit.committer.date.split("T")
    const rawDate = rawDateTime[0].split("-")
    const rawTime = rawDateTime[1].split("Z")[0].split(":")
    const hr = +rawTime[0] + 7
    rawDate[2] = hr >= 24 ? padZeros(+rawDate[2] + 1) : rawDate[2]
    const mn = +rawTime[1]
    const sec = +rawTime[2]
    const dateTime = `${rawDate.join("-")} ${hr >= 24 ? padZeros(hr % 24, 2) : padZeros(hr, 2)}:${padZeros(mn, 2)}:${padZeros(sec, 2)}`
    return (
      <Commit
        key={commit.commit.committer.date}
        username={username}
        repo={repo}
        commitSha={commitSha}
        dateTime={dateTime}
        message={message}
        latest={index === 0}
        setCurrentSha={setCurrentSha}
        commandRef={commandRef}
      />
    )
  })
  
  return (
    <div>
      <h2 className="d-flex justify-content-center align-items-center flex-column flex-md-row mb-4 mb-md-2">
        <span className="mx-0 mx-sm-2 my-2 my-sm-0">User: <span className="badge" style={{ backgroundColor: "#8B5CF6" }} >{username}</span></span>
        <span>Repository: <span className="badge" style={{ backgroundColor: "#EF4444" }}>{repo}</span></span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {commitCards}
      </div>
    </div>
  )
}

export default Commits