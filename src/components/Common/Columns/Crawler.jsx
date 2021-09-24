import React from 'react';
import { Button, Tag } from 'antd';
import { NumId, AutoAsyncSwitch, Selector, UpdatedAt } from '../Column';
import { SyncOutlined, CheckCircleOutlined } from '@ant-design/icons';


const ColumnsCrawler = [
  NumId,

  {
    title: () => <em className="tb-title">数据名称</em>,
    dataIndex: 'title',
    align: 'center',
    width: 250,
    fixed: 'left',
    render: (text, { color }) => (
      <Tag color={ color } className="crawl-title">
        { text }
      </Tag>
    )
  },

  {
    title: () => <em className="tb-title">更新间隔</em>,
    dataIndex: 'duration',
    align: 'center',
    width: 200,
    render: (text, item) => (<Selector { ...item } />)
  },

  UpdatedAt,

  {
    title: () => <em className="tb-title">自动更新</em>,
    dataIndex: 'switch_type',
    align: 'center',
    width: 150,
    render: (text, item) => (<AutoAsyncSwitch { ...item } />)
  },

  {
    title: () => <em className="tb-title">操作</em>,
    dataIndex: 'operator',
    align: 'center',
    width: 150,
    fixed: 'right',
    render: (value, item) => {
      const { text, crawlLoading } = item
      return (
        // ? (<Tag icon={ loaded === 2
        //   ? <CheckCircleOutlined color="success" />
        //   : <SyncOutlined spin /> } color="processing">
        //   success
        // </Tag>)
        <Button
          ghost
          loading={ crawlLoading }
          className="state-btn"
          data-type="field"
          type="primary">
          { text }
        </Button>
      )
    }
  }
];

export {
  ColumnsCrawler
}
