import React from 'react';
import './index.scss';

const Logo = () => {
  return (
    <div className="logo-wrap">
      <img className="logo" src={ require('@/assets/images/logo.png') } alt="logo" />

      <h1 className="title">站点管理</h1>
    </div>
  );
};

export default Logo;
