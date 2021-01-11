import React from "react"
import Lottie from "react-lottie"

const Animation = ({ animationData, width, height }) => {
  const animationOptions = {
    loop: true,
    autoplay: true, 
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div>
      <Lottie
        options={animationOptions}
        width={width}
        height={height}
      />
    </div>
  )
}

export default Animation