import React from 'react'
import './indes.scss'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="img-wrap">
        <img src={ require('@/assets/images/404.png') } alt="错误页面" />

        <img className="cloud" src={ require('@/assets/images/404-cloud.png') } alt="404页面" />
      </div>
    </div>
  )
}

export default NotFound
