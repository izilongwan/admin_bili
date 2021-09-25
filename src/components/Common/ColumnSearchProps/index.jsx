import React, { useContext, useEffect, useCallback, useState } from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { common } from '@/components/Index/Context'
import { useLocation } from 'react-router'

let ref = null

const FilterDropdown = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  dataIndex }) => {

  const { onSearchData, onRestoreSearch, refreshClearFilterCount } = useContext(common);
  const { pathname } = useLocation();
  const [isFirst, setIsFirst] = useState(true)

  const handleSearch = ([kw], confirm, dataIndex) => {
    if (kw && kw.length > 0) {
      onSearchData(kw, dataIndex);
    }

    confirm();
  }

  const handleReset = useCallback((clearFilters) => {
    clearFilters()
    onRestoreSearch()
  }, [onRestoreSearch]);

  useEffect(() => {
    // 第一次不执行
    if (!isFirst) {
      clearFilters()
    }
    isFirst && setIsFirst(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, refreshClearFilterCount])

  return (
    <div style={ { padding: 8 } }>
      <Input
        ref={ (node) => (ref = node) }
        placeholder={ `Search ${ dataIndex }` }
        value={ selectedKeys[0] }
        onChange={ (e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={ () => handleSearch(selectedKeys, confirm, dataIndex) }
        style={ { width: 188, marginBottom: 8, display: 'block' } }
      />

      <Button
        type="primary"
        onClick={ () => handleSearch(selectedKeys, confirm, dataIndex) }
        icon={ <SearchOutlined /> }
        size="small"
        style={ { width: 90, marginRight: 8 } }>
        Search
      </Button>

      <Button
        onClick={ () => handleReset(clearFilters) }
        size="small"
        style={ { width: 90 } }>
        Reset
      </Button>
    </div>
  )
}

const ColumnSearchProps = (dataIndex) => {
  return {
    filterDropdown: (opts) => (
      <FilterDropdown dataIndex={ dataIndex } { ...opts } />
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={ { color: filtered ? '#1890ff' : undefined } } />
    ),
    onFilter: (value, record) => (
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
    ),
    onFilterDropdownVisibleChange: (visible) => {
      visible && setTimeout(() => ref.input.select());
    }
  };
};

export default ColumnSearchProps;
