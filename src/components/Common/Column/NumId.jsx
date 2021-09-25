import React, { useContext } from 'react';
import { common } from '@/components/Index/Context'

function PageItemNum (item, record, index, c) {
  const { pagination: { current, pageSize } } = useContext(common);

  const ItemNum = (current - 1) * pageSize + index + 1

  return (<span>{ ItemNum }</span>)
}

export const NumId = {
  title: () => <em className="tb-title">序号</em>,
  render: PageItemNum,
  align: 'center',
  width: 100,
  fixed: 'left',
}
