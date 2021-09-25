import React, { useContext } from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { common } from '@/components/Index/Context'

const AutoAsyncSwitch = (item) => {
  const { switchLoading, switch_type } = item
  const { onAutoAsyncDataChange } = useContext(common);

  return (
    <Switch
      loading={ switchLoading }
      onChange={ () => onAutoAsyncDataChange(item) }
      checkedChildren={ <CheckOutlined /> }
      unCheckedChildren={ <CloseOutlined /> }
      defaultChecked={ switch_type }
      checked={ switch_type }
    />
  );
}

export {
  AutoAsyncSwitch
};
