import React from 'react';
import { Tag } from 'antd'

export const PopupCount = {
  title: () => <em className="tb-title">弹幕量</em>,
  align: 'center',
  width: 150,
  dataIndex: 'popup_count',
  sorter: (a, b) => a.popup_count - b.popup_count,
  render: (text) => <Tag>{ text }</Tag>
}
