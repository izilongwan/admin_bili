import React from 'react';
import { Tag } from 'antd';

export const Duration = {
  title: () => <em className="tb-title">时长</em>,
  dataIndex: 'duration',
  align: 'center',
  width: 150,
  render: (text) => (<Tag>{ text }</Tag>)
}
