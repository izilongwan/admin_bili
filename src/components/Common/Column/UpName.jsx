import React from 'react';
import { Tag } from 'antd';

export const UpName = {
  title: () => <em className="tb-title">Up主</em>,
  align: 'center',
  width: 150,
  dataIndex: 'up_name',
  render: (text, { up_href }) => (
    <a href={ up_href } target="_blank" rel="noopener noreferrer">
      <Tag color="purple">{ text }</Tag>
    </a>
  )
}
