import React from "react"
import Animation from "./Animation"
import loadingAnimation from "../animations/loading.json"

const Wrapper = () => (
  <div className="wrapper">
    <Animation animationData={loadingAnimation} width={200} height={200} />
  </div>
)

export default Wrapper