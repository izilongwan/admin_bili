import React from 'react';
import { SelectTags } from './SelectTags';
import { BILI } from '@/config'

const { FIELD } = BILI

export const Tags = {
  title: () => <em className="tb-title">视频分类</em>,
  align: 'center',
  width: 250,
  dataIndex: 'tags',
  onFilter: (value, { tags }) => tags.includes(value),
  filters: FIELD.map((item) => ({ text: item, value: item })),
  render: (text, data) => <SelectTags data={ data } />
}
