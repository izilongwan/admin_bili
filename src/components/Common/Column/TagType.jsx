import React from 'react';
import { Tag } from 'antd';

export const TagType = {
  title: () => <em className="tb-title">标签</em>,
  dataIndex: 'tag',
  align: 'center',
  width: 100,
  render: (text) => (
    <Tag color="lime">{ text }</Tag>
  )
}
