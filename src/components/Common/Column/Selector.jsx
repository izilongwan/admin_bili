import React, { useContext } from 'react';
import { Select } from 'antd';
import { DURATION } from '@/config'
import { common } from '@/components/Index/Context'

const { Option } = Select;

const Selector = (item) => {
  const { id, duration, durationLoading } = item
  const { onSelectCrawlerDuration } = useContext(common);

  return (
    id === 1
      ? (<Select
        loading={ durationLoading }
        defaultValue={ duration }
        style={ { width: 150 } }
        onChange={ (value) => onSelectCrawlerDuration(item, value) }>
        { DURATION.map(({ text, value }, idx) => (
          <Option key={ idx } value={ value }>{ text }</Option>
        )) }
      </Select>)
      : ''
  );
};

export {
  Selector
};
