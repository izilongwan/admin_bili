import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import Title from '@/components/Index/Common/Title'
import Content from '@/components/Index/Common/Content'

const CommonContent = (props) => {
  let { pathname } = useLocation();

  pathname === '/' && (pathname = '/crawler');

  const ref = useRef(null)

  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({});

  const titleProps = { contentRef: ref, pathname, loading };

  const childrenProps = {
    loading,
    pathname,
    setLoading,
    cache,
    setCache,
  }

  return (<>
    <Title { ...titleProps } />
    <Content ref={ ref } { ...childrenProps } />
  </>);
};

export default CommonContent;
