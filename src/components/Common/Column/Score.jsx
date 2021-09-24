import React from 'react';
import { Tag } from 'antd'

export const Score = {
  title: () => <em className="tb-title">分数</em>,
  align: 'center',
  width: 120,
  dataIndex: 'score',
  sorter: (a, b) => a.score - b.score,
  render: (text) => <Tag color="cyan">{ text }</Tag>

}
