import React from 'react';
import { Tag } from 'antd';

export const FavCount = {
  title: () => <em className="tb-title">收藏量</em>,
  align: 'center',
  width: 150,
  dataIndex: 'fav_count',
  sorter: (a, b) => a.fav_count - b.fav_count,
  render: (text) => <Tag>{ text }</Tag>,
}
