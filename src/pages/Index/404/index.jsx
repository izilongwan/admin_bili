import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { checkLoginState } from '../../../api/user'
import './indes.scss'

const NotFound = () => {
  const { push } = useHistory()

  useEffect(() => {
    ;(async () => {
      const [err, ret] = await checkLoginState()

      if (err) {
        push('/login')
        return
      }

      const { code, msg } = ret

      if (code !== 0) {
        push('/login')
        return
      }
    })();
  })

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
