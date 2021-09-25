import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { SIDEBAR_MENU } from '@/config';
import './index.scss'

const { Sider } = Layout;

const LaySidebar = ({ pathname }) => {

  return (
    <Sider className="sidebar" width={ 220 }>
      <Menu
        mode="inline"
        defaultSelectedKeys={ [pathname] }
        style={ { height: '100%', borderRight: 0 } }>
        {
          SIDEBAR_MENU.map(({ text, path }) => (
            <Menu.Item key={ path }>
              <Link className="lk" to={ path }>
                { text }
              </Link>
            </Menu.Item>
          ))
        }
      </Menu>
    </Sider>
  );
};

export default LaySidebar;
