import React from "react"
import Commit from "./Commit"

const Commits = ({ commits }) => {

  const commitCards = commits.map((commit, index) => {
    const commitUrl = commit.commit.url.split("/")
    const message = commit.commit.message
    const commitSha = commitUrl[commitUrl.length - 1]
    const rawDateTime = commit.commit.committer.date.split("T")
    const rawDate = rawDateTime[0]
    const rawTime = rawDateTime[1].split("Z")[0].split(":")
    const hr = +rawTime[0] + 7
    const mn = +rawTime[1]
    const sec = +rawTime[2]
    const dateTime = `${rawDate} ${hr}:${mn}:${sec}`
    const username = commit.author.login
    return <Commit username={username} repo={commitUrl[5]} commitSha={commitSha} dateTime={dateTime} message={message} latest={index === 0} />
  })

  console.log(commits[0])
  
  return (
    <div className="d-flex flex-wrap mt-4 justify-content-center">
      {commitCards}
    </div>
  )
}

export default Commits