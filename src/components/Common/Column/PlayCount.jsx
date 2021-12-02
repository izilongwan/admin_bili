import { sorter } from '@/utils';
import { Tag } from 'antd';
import React from 'react';

export const PlayCount = {
  title: () => <em className="tb-title">播放量</em>,
  dataIndex: 'play_count',
  align: 'center',
  sorter,
  width: 150,
  render: (text) => <Tag>{ text }</Tag>
}
