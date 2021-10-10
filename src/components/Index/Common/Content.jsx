import React, {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle
} from 'react';
import { Table } from 'antd';
import { message } from 'antd';
import * as APICrawl from '@/api/crawl';
import * as APIData from '@/api/data';
import { BILI } from '@/config';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { findParent } from '@/utils/tools';
import { common } from '@/components/Index/Context';
import {
  ColumnsDefault2,
  ColumnsDefault,
  ColumnsCarousel,
  ColumnsCrawler,
  ColumnsESports,
  ColumnsLive,
  ColumnsPromote,
  ColumnsOrigin,
  ColumnsRecord,
} from '@/components/Common/Columns'

const { CRAWLER } = BILI;

const { Provider } = common

const API_MODELS = {
  1: APICrawl.crawlerSettingsUpdate,
  2: APIData.updateData,
}

const COLUMNS = {
  bangumi: ColumnsDefault2,
  movie: ColumnsDefault2,

  full: ColumnsDefault,
  rookie: ColumnsDefault,

  carousel: ColumnsCarousel,
  record: ColumnsRecord,
  crawler: ColumnsCrawler,
  e_sports: ColumnsESports,
  live: ColumnsLive,
  promote: ColumnsPromote,
  origin: ColumnsOrigin,
}

const CommonContent = forwardRef((props, ref) => {
  const { pathname, cache, setCache, setLoading, loading } = props;
  const [columns, setColumns] = useState([])
  const { push } = useHistory();
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1)
  const [searchCount, setSearchCount] = useState(-1);
  const [curPathname, setCurPathname] = useState('');
  const [refreshClearFilterCount, setRefreshClearFilterCount] = useState(0)
  const isCrawlerSettings = pathname === '/crawler'

  const _setCache = useCallback(({ curPage = currentPage, pgSize = pageSize, newData, total } = {}) => {
    const obj = cache[pathname]

    if (obj && pgSize === pageSize) {
      newData && (obj.data[curPage - 1] = newData)
    }
    else {
      cache[pathname] = {
        total: 0,
        data: []
      }
    }

    total != null && (cache[pathname].total = total)

    setCache({ ...cache })
  }, [cache, currentPage, pageSize, pathname, setCache])

  const checkCache = useCallback(({ curPage, pgSize }) => {
    const res = cache[pathname];
    // console.log('pg-size', pgSize, pageSize)

    if (res && pgSize === pageSize) {
      const { data = [] } = res;

      if (data[curPage - 1]) {
        return [...data[curPage - 1]]
      }
    }

    _setCache({ curPage, pgSize })
    return []

  }, [pageSize, cache, pathname, _setCache]);

  const getData = useCallback(async ({ curPage = currentPage, pgSize = pageSize } = {}) => {
    const field = pathname.slice(1);

    let ret = checkCache({ curPage, pgSize })
    // console.log('ret', curPage, ret, pgSize)

    if (ret.length) {
      setData(ret)
      return
    }

    setLoading(true);
    setData([])

    const [err, res0] = isCrawlerSettings
      ? await APICrawl.crawlerSettings()
      : await APIData.getData({ field, page: curPage, num: pgSize })

    setLoading(false);

    if (err) {
      const { msg, code } = err;
      message.error(msg);
      code === -1 && push('/login')
      return;
    }

    const { code, msg, data: res } = res0;

    if (code !== 0) {
      message.error(msg);
    }

    const result = isCrawlerSettings
      ? res.data.map((item, idx) => {

        return {
          text: '爬取',
          ...CRAWLER[idx],
          ...item,
          statusLoading: false,
          durationLoading: false,
          crawlLoading: false,
          switchLoading: false,
        }
      })
      : res.data.map((item, idx) => ({
        ...item,
        tags: item.tags ? JSON.parse(item.tags) : item.tags,
        statusLoading: false,
        tagsLoading: false,
        crawlLoading: false,
        switchLoading: false,
      }))

    if (result.length > 0) {
      _setCache({ curPage, pgSize, newData: result, total: res.total })
      setData(result)
    }

    message.success(msg);

  }, [_setCache, checkCache, currentPage, isCrawlerSettings, pageSize, pathname, push, setLoading]);

  const returnNewData = (newItem) =>
    data.map(d => {
      if (d.id === newItem.id) {
        return newItem
      }
      return d
    })

  const updateData = async (modelType, item, obj) => {
    const newItem = Object.assign({}, item)
    let isStatusLoading = false,
      isDurationLoading = false,
      isTagsLoading = false,
      isSwitchLoading = false

    for (const key in obj) {
      if (Object.hasOwnProperty.call(item, key)) {
        newItem[key] = obj[key]

        if (key === 'duration') {
          isDurationLoading = true
        }

        if (key === 'status') {
          isStatusLoading = true
        }

        if (key === 'switch_type') {
          isSwitchLoading = true
        }

        if (key === 'tags') {
          isTagsLoading = true
        }
      }
    }

    newItem.statusLoading = isStatusLoading
    newItem.durationLoading = isDurationLoading
    newItem.tagsLoading = isTagsLoading
    newItem.switchLoading = isSwitchLoading
    setData(returnNewData(newItem))

    const [err, ret] = await API_MODELS[modelType](newItem)

    newItem.statusLoading = false
    newItem.durationLoading = false
    newItem.switchLoading = false
    newItem.tagsLoading = false

    setData(returnNewData(item))

    if (err) {
      const { msg, code } = err
      message.error(msg)
      code === -1 && push('/login')
      return
    }

    const { code, msg, data: data0 } = ret;

    if (code === 0) {
      const newData = returnNewData({ ...newItem, ...data0 })

      message.success(msg);
      setData(newData)
      return;
    }

    message.error(msg);
  };

  const resetData = () => {
    delete cache[pathname]
    _setCache({})
  }

  const refreshData = () => {
    resetData()
    onRestoreSearch()
  }

  const crawling = async (item) => {
    item.crawlLoading = true
    setData([...data]);

    const { field, id } = item
    const [err, res] = await APICrawl.crawlerData({ field, id });

    item.crawlLoading = false

    setData([...data])
    resetData(field)

    if (err) {
      const { code, msg } = err
      message.error(msg);
      code === -1 && push('/login')
      return;
    }

    const { code, msg, data: ret } = res;

    if (code === 0) {
      Object.assign(item, ret)
      setData([...data]);
      message.success(msg);
      return;
    }

    message.error(msg);
  };

  const onAutoAsyncDataChange = async (item) => {
    await updateData(1, item, { switch_type: item.switch_type ? 0 : 1 })
  }

  const onSelectCrawlerDuration = async (item, value) => {
    await updateData(1, item, { duration: value })
  }

  const onTableClick = (ev, record) => {
    const { target, srcElement } = ev || window.event;
    const parent = findParent(target || srcElement, 'state-btn');

    if (!parent) {
      return;
    }

    let { type } = parent.dataset;

    switch (type) {
      case 'status':
        updateData(2, record, { status: record.status ? 0 : 1 })
        break;

      case 'field':
        crawling(record);
        break;

      default:
        break;
    }
  };

  const onSelectChange = async (tags, item) => {
    const { id, status } = item;

    const field = pathname.slice(1);

    item.tagsLoading = true;
    setData([...data]);

    const [err, res] = await APIData.updateData({ field, tags, id, status })

    item.tagsLoading = false;

    if (err) {
      const { code, msg } = err;
      message.error(msg);
      code === -1 && push('/login')
      return;
    }

    const { code, msg } = res;

    if (code === 0) {
      item.tags = tags;
      message.success(msg);
      setData([...data]);
      return;
    }

    message.error(msg);
    setData([...data]);
  };

  const onPageChange = (curPage, pgSize) => {
    setCurrentPage(curPage)
    getData({ curPage, pgSize })
  }

  const onShowSizeChange = (curPage, pgSize) => {
    setPageSize(pgSize);
  };

  const onRestoreSearch = useCallback(() => {
    setSearchCount(-1)
    getData()
  }, [getData])

  const onSearchData = async (kw) => {
    setLoading(true);

    const field = pathname.slice(1);
    const [err, result] = await APIData.searchData({ field, kw })

    setLoading(false);

    if (err) {
      const { code, msg } = err
      message.error(msg);
      code === -1 && push('/login')
      return;
    }

    const { code, data: res, msg } = result;

    if (code === 0) {
      setData(res.data);
      setSearchCount(res.total);
      message.success(msg)
      return
    }

    message.error(msg)
  }

  const ret = cache[pathname];
  const total = searchCount === -1
    ? (ret ? ret.total : 0)
    : searchCount;

  const pagination = {
    showTotal: (total) => `共${ total }条`,
    pageSize,
    showQuickJumper: true,
    showSizeChanger: true,
    current: currentPage,
    onChange: onPageChange,
    onShowSizeChange,
    total,
  };

  const commonValue = {
    pagination,
    refreshClearFilterCount,
    onAutoAsyncDataChange,
    onSelectCrawlerDuration,
    onSelectChange,
    onPageChange,
    onShowSizeChange,
    onSearchData,
    onRestoreSearch,
  }

  useEffect(() => {
    if (pathname !== curPathname) {
      setCurPathname(pathname);
      setColumns(COLUMNS[pathname.slice(1)])
      setCurrentPage(1)
      onRestoreSearch(1)
      setRefreshClearFilterCount(0)
    }
  }, [curPathname, onRestoreSearch, pathname]);

  useImperativeHandle(ref, () => ({
    refreshData,
    setRefreshClearFilterCount,
  }))

  return (
    <Provider value={ commonValue }>
      <Table
        loading={ loading }
        columns={ columns }
        onRow={ (data) => ({ onClick: (e) => onTableClick(e, data) }) }
        scroll={ { y: 'calc(100vh - 270px)' } }
        rowKey={ ({ id }) => id }
        pagination={ pagination }
        dataSource={ data }
      />
    </Provider>
  );
})

export default CommonContent;
