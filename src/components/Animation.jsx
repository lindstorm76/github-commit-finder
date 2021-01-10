import React from "react"
import Lottie from "react-lottie"

export default Animation = ({ animationData, width, height }) => {
  const style = {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20rem"
  }

  const animationOptions = {
    loop: true,
    autoplay: true, 
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div style={style}>
      <Lottie
        options={animationOptions}
        width={width}
        height={height}
      />
    </div>
  )
}