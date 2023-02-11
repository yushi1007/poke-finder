import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  return (
    <div className="loader">
        <div>
          <FadeLoader size={50} color="#4398ff" />
        </div>
    </div>
  )
}

export default Loader