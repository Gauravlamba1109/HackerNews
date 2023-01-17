import React from "react"

const Loading = () => (
    <div>
    <img 
    style={{
      width: '100px',
      margin: 'auto',
      marginTop: '40px',
      display: 'block',
    }}
    src={require('./XVo6.gif')} alt="loading..." /> 
    <div className="font-bold text-black flex  justify-center ">loading results </div>
    </div>
  )

export default Loading 