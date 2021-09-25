import { baseURL } from '@/config';

export default {
  COMMON_API: '',
  GET_DATA: 'data/get_data',
  SEARCH_DATA: 'data/search_data',
  UPDATE_DATA_STATUS: 'data/update_data_status',
  UPDATE_DATA_TAGS: 'data/update_data_tags',
  CRAWL_DATA: 'crawler/crawl_data',
  AUTO_ASYNC_DATA: 'crawler/auto_async_data'
}

export const CAPTCHA = baseURL + '/captcha';
