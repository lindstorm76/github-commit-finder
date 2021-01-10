import React from "react"
import Commit from "./Commit"
import Animation from "./Animation"
import loadingAnimation from "../animations/loading.json"

const Commits = ({ notFound, loading, commits, username, repo }) => {

  if (notFound) return (
    <h1 className="text-muted text-center mt-5">
      Username or repository not found
    </h1>
  )

  if (loading && commits === null) return <Animation animationData={loadingAnimation} width={200} height={200} />
  
  if (commits === null) return null

  const commitCards = commits.map((commit, index) => {
    const commitUrl = commit.commit.url.split("/")
    const message = commit.commit.message.split("\n")[0]
    const commitSha = commitUrl[commitUrl.length - 1]
    const rawDateTime = commit.commit.committer.date.split("T")
    const rawDate = rawDateTime[0]
    const rawTime = rawDateTime[1].split("Z")[0].split(":")
    const hr = +rawTime[0] + 7
    const mn = +rawTime[1]
    const sec = +rawTime[2]
    const dateTime = `${rawDate} ${hr}:${mn}:${sec}`
    return (
      <Commit
        key={commit.commit.committer.date}
        username={username}
        repo={repo}
        commitSha={commitSha}
        dateTime={dateTime}
        message={message}
        latest={index === 0}
      />
    )
  })
  
  return (
    <div className="mt-5">
      <h2 className="d-flex justify-content-center align-items-center flex-column flex-md-row mb-4 mb-md-2">
        <span className="mx-0 mx-sm-2 my-2 my-sm-0">User: <span className="badge bg-primary">{username}</span></span>
        <span>Repository: <span class="badge" style={{ backgroundColor: "#EF4444" }}>{repo}</span></span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {commitCards}
      </div>
    </div>
  )
}

export default Commits