import React from 'react';
import LazyLoad from 'react-lazy-load';
import lazyImg from '~/assets/images/cover-img-lazy.png';

export const CoverImg = {
  title: () => <em className="tb-title">封面图片</em>,
  dataIndex: 'img',
  align: 'center',
  fixed: 'left',
  width: 150,
  render: (img, { title, href }) => (
    <a
      href={ href }
      rel="noopener noreferrer"
      target="_blank"
      className="bili-img-wrap"
      style={ { backgroundImage: `url(${ lazyImg })` } }>
      <LazyLoad>
        <img height="100%" src={ img } alt="图片" title={ title } />
      </LazyLoad>
    </a>
  )
}
