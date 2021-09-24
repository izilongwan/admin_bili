import React, { createRef, useEffect } from 'react'
import LoginLogo from '~/components/Login/Logo'
import LoginForm from '~/components/Login/Form'
import '~/components/Login/index.scss'
import Crawler from '~/config/cover/crawler'

const canvas = new Crawler(document.body, 0)

const Login = () => {
  const ref = createRef(null);

  useEffect(() => {
    canvas.handleCanvasState(true)
    return () => {
      canvas.handleCanvasState(false)
    }
  }, [])

  return (
    <div className="container" ref={ ref }>
      <div className="login-wrap">
        <LoginLogo />

        <LoginForm />
      </div>
    </div>
  )
}

export default Login
