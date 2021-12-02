import React from 'react';
import { Menu, message, Popconfirm } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { logout } from '@/api/user'

const Dropdown = () => {
  const { push } = useHistory();

  const hanldeLogout = async () => {
    const [err, res] = await logout();

    if (err) {
      return;
    }

    const [err0, ret0] = res[0]

    if (err0) {
      return
    }

    const { code, msg } = ret0;

    if (code === 0) {
      push('/login');
      message.success(msg);
      return;
    }

    code === -1 && push('/login')
    message.error(msg);
  };

  return (
    <Menu>
      <Menu.Item>
        <Popconfirm
          title="确定退出登录?"
          onConfirm={ hanldeLogout }
        >
          <LogoutOutlined />
        安全退出
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );
};

export default Dropdown;
