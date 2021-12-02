import { sorter } from '@/utils';
import { Tag } from 'antd';
import React from 'react';


export const ThumbCount = {
  title: () => <em className="tb-title">点赞量</em>,
  dataIndex: 'thumb_count',
  align: 'center',
  sorter,
  width: 120,
  render: (text) => <Tag color="red">{ text }</Tag>
}
