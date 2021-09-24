import React, { forwardRef, useImperativeHandle } from 'react'
import { Tag } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { BILI } from '~/config';

const { TITLE } = BILI;

const Title = forwardRef((props, ref) => {
  const { pathname, loading } = props
  const title = TITLE[pathname];

  useImperativeHandle(ref, () => ({
    getData: () => console.log(0)
  }))

  return (
    title
      ? (
        <div className="content-header">
          <h3 className="title">{ title }</h3>

          <Tag color="green" className="refresh">
            <span className="text">刷新</span>
            <SyncOutlined spin={ loading } />
          </Tag>
        </div>
      )
      : null
  )
})

export default Title
