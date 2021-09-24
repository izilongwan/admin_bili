import React, { useContext } from 'react';
import { Select, Tag } from 'antd';
import { BILI } from '~/config'
import { common } from '~/components/Index/Context'

const { Option } = Select;
const { FIELD } = BILI;

const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
const maxIdx = colors.length - 1;

const tagRender = (props) => {
  const { label, closable, onClose } = props;

  const idx = Math.floor(Math.random() * maxIdx) + 1;
  const color = colors[idx];

  return (
    <Tag color={ color } closable={ closable } onClose={ onClose } style={ { marginRight: 3 } }>
      { label }
    </Tag>
  );
}

const SelectTags = ({ data }) => {
  const { tags, tagsLoading } = data;
  const { onSelectChange } = useContext(common);

  return (
    <Select
      mode="multiple"
      loading={ tagsLoading }
      tagRender={ tagRender }
      defaultValue={ tags }
      style={ { width: 150 } }
      onChange={ (value) => onSelectChange(value, data) }>
      { FIELD.map((item, idx) => (
        <Option key={ idx } value={ item }>{ item }</Option>
      )) }
    </Select>
  );
};

export default SelectTags;
