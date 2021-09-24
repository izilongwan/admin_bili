import React from 'react';
import { Tag } from 'antd';

export const LatestTip = {
  title: () => <em className="tb-title">最新</em>,
  align: 'center',
  width: 150,
  dataIndex: 'latest_tip',
  render: (text) => (
    <Tag color="lime">{ text }</Tag>
  )
}
