import React from 'react';
import { Button } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';

const ColumnStatus = (text, { statusLoading }) =>
(
  <Button
    ghost
    loading={ statusLoading }
    className="state-btn"
    data-type="status"
    data-status={ text ? 0 : 1 }
    icon={ text ? <DownloadOutlined className="icon" /> : <UploadOutlined className="icon" /> }
    type={ text ? 'danger' : 'primary' }>
    { text ? '下架' : '上架' }
  </Button>
)

export const Status = {
  title: () => <em className="tb-title">操作</em>,
  width: 250,
  align: 'center',
  dataIndex: 'status',
  fixed: 'right',
  filters: [
    { text: '已上架', value: 1 },
    { text: '已下架', value: 0 }
  ],
  onFilter: (value, record) => record.status.toString().includes(value),
  render: ColumnStatus
}
