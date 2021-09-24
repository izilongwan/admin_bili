import React from 'react'
import { Tag } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { BILI } from '~/config';

const { TITLE } = BILI;

const Title = (props) => {
  const { pathname, loading, contentRef } = props
  const title = TITLE[pathname];

  const refreshData = () => {
    const field = pathname.slice(1)

    contentRef.current.setRefreshClearFilterCount(c => c + 1)
    contentRef.current.refreshData(field)
  }

  return (
    title
      ? (
        <div className="content-header">
          <h3 className="title">{ title } { loading }</h3>

          <Tag color="green" className="refresh" onClick={ refreshData }>
            <span className="text">刷新</span>
            <SyncOutlined spin={ loading } />
          </Tag>
        </div>
      )
      : null
  )
}

export default Title
