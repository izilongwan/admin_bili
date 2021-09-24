import React from 'react';
import { sorter } from '~/utils/tools';
import { Tag } from 'antd';

export const LiveCount = {
  title: () => <em className="tb-title">观看人数</em>,
  dataIndex: 'live_count',
  align: 'center',
  width: 200,
  sorter,
  render: (text) => <Tag>{ text }</Tag>
}
