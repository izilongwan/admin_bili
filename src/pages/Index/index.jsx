import { Layout } from 'antd';
import LayHeader from '@/components/Index/Header';
import LaySidebar from '@/components/Index/Sidebar';
import React from 'react';
import { useLocation } from 'react-router';
import './index.scss';

const { Content } = Layout;

const Index = ({ children }) => {
  let { pathname } = useLocation();

  pathname === '/' && (pathname = '/crawler');

  // const refChildren = React.Children.map(children, child => {
  //   const cs = React.Children.map(children.props.children, (c, idx) => React.cloneElement(c, { innerRef: ref, ref }))
  //   return React.cloneElement(child, {}, ...cs)
  // });

  return (
    <Layout className="layout">
      <LayHeader />

      <Layout className="main">
        <LaySidebar pathname={ pathname } />

        <Layout style={ { margin: '24px 0 0 24px', backgroundColor: '#fff' } }>
          <Content className="site-layout-background content">
            { children }
          </Content>

        </Layout>

      </Layout>

    </Layout>
  );
};

export default Index;
