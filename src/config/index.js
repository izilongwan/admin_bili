const m = 60 * 1000,
      h = 60 * m;

export const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5001/api'
  : 'http://bili.letme.site/api';

export const SIDEBAR_MENU = [
  { text: '数据爬虫', path: '/crawler' },
  { text: '轮播图', path: '/carousel' },
  { text: '日常记录', path: '/record' },
  { text: '推广', path: '/promote' },
  { text: '电竞赛事', path: '/e_sports' },
  { text: '直播ing', path: '/live' },
  { text: '全站榜', path: '/full' },
  { text: '原创榜', path: '/origin' },
  { text: '新番榜', path: '/bangumi' },
  { text: '电影榜', path: '/movie' },
  { text: '新人榜', path: '/rookie' },
]

export const MESSAGE = {
  NETWORK_ERROR: '网络请求错误',
  SERVER_ERROR: '服务端错误',
  REFRESH_DATA: '数据刷新成功',
  CHNAGE_DRUATION: '爬取时间修改成功'
}

export const DURATION = [
  { value:  h, text: '每一小时' },
  { value:  2 * h, text: '每两小时' },
  { value:  3 * h, text: '每三小时' },
  { value:  6 * h, text: '每六小时' },
  { value:  8 * h, text: '每八小时' },
  { value:  12 * h, text: '每十二小时' }
]

export const BILI = {
  TITLE: {
    '/carousel': '轮播图',
    '/record': '日常记录',
    '/promote': '推广',
    '/e_sports': '电竞赛事',
    '/live': '直播ing',
    '/full': '全站榜',
    '/origin': '原创榜',
    '/bangumi': '新番榜',
    '/movie': '电影榜',
    '/rookie': '新人榜',
    '/crawler': '数据爬虫'
  },
  CRAWLER: [
    {
      color: 'magenta',
      text: '爬取所有',
    },
    {
      text: '爬取',
      color: 'red'
    },
    {
      text: '爬取',
      color: 'volcano'
    },
    {
      text: '爬取',
      color: 'lime'
    },
    {
      text: '爬取',
      color: 'orange'
    },
    {
      text: '爬取',
      color: 'gold'
    },
    {
      text: '爬取',
      color: 'purple'
    },
    {
      text: '爬取',
      color: 'green'
    },
    {
      text: '爬取',
      color: 'blue'
    },
    {
      text: '爬取',
      color: 'geekblue'
    },
  ],
  FIELD: ['全站', '动画', '国创相关', '舞蹈', '音乐', '游戏', '科技', '数码', '生活', '鬼畜', '时尚', '娱乐', '电影', '番剧', '国产动画', '纪录片', '电影', '电视'],
}

export default {
  SIDEBAR_MENU,

  MESSAGE,

  DURATION,

  BILI,
}
