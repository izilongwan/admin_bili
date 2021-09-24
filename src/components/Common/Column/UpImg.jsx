import React from 'react';
import LazyLoad from 'react-lazy-load';
import lazyImg from '~/assets/images/avatar-lazy.webp';

export const UpImg = {
  title: () => <em className="tb-title">Up主头像</em>,
  dataIndex: 'up_img',
  align: 'center',
  width: 120,
  render: (img) => (
    <div className="up-img" style={ { backgroundImage: `url(${ lazyImg })` } }>
      <LazyLoad>
        <img height="100%" src={ img } alt="头像" />
      </LazyLoad>
    </div>
  )
}
