import React from 'react';
import { sorter } from '~/utils/tools';
import { Tag } from 'antd';


export const ThumbCount = {
  title: () => <em className="tb-title">点赞量</em>,
  dataIndex: 'thumb_count',
  align: 'center',
  sorter,
  width: 120,
  render: (text) => <Tag color="red">{ text }</Tag>
}
