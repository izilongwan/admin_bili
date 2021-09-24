import React from 'react';
import { Tag } from 'antd'

export const UpdatedAt = {
  title: () => <em className="tb-title">最新更新</em>,
  dataIndex: 'updatedAt',
  align: 'center',
  width: 150,
  render: (text, item) => <Tag>{ text }</Tag>
}
