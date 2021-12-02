import React, { createRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import LoginLogo from '@/components/Login/Logo'
import LoginForm from '@/components/Login/Form'
import '@/components/Login/index.scss'
import Crawler from '@/config/cover/crawler'
import { checkLoginState } from '../api/user'

const canvas = new Crawler(document.body, 0)

const Login = () => {
  const ref = createRef(null);
  const { push } = useHistory();

  useEffect(() => {
    ;(async () => {
      const [err, ret] = await checkLoginState()

      if (err) {
        return
      }

      const [err0, ret0] = ret[0]

      if (err0) {
        return
      }

      const { code, msg } = ret0

      if (code !== 0) {
        return
      }

      push('/crawler')
    })();

    canvas.handleCanvasState(true)
    return () => {
      canvas.handleCanvasState(false)
    }
  }, [push])

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
