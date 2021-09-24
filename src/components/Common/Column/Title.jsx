import React from 'react';
import ColumnSearchProps from '../ColumnSearchProps';

export const Title = {
  title: () => <em className="tb-title">标题</em>,
  dataIndex: 'title',
  fixed: 'left',
  align: 'center',
  width: 150,
  ...ColumnSearchProps('title'),
  render: (text, { href }) => (
    <a
      href={ href }
      rel="noopener noreferrer"
      target="_blank"
      className="course-name">
      { text }
    </a>
  )
}
