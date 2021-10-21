import React, { Fragment, useEffect, useRef } from 'react';
import { Descriptions, Tag, Image } from 'antd';
import { useFetch } from '../../hooks';
import store from '@/shared/store';

import './index.css';

const Index = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const [
    {
      data: { data },
      isLoading,
    },
  ] = useFetch(`https://api.justcome.cn/scenic/${id}?admin=true`, {});
  let msgRef = useRef(null);

  useEffect(() => {
    document.addEventListener('emit', queryData);

    // 返回值是取消订阅
    const unSubscribe = store.subscribe(() => {
      console.log(store.getState(), 'react  - 订阅方法');
    });

    return () => {
      document.removeEventListener('emit', queryData);
      unSubscribe();
    };
  }, []);
  const queryData = ({ detail: { handelData, jumpUrl } }) => {
    console.log(handelData({ msg: msgRef.current }), '原生通信');
    // jumpUrl('/mic/vue/list')
  };
  const dispatchData = (msg) => () => {
    msgRef.current = msg;
    /* 触发自定义事件 通信*/
    document.dispatchEvent(window.cEvt);
  };
  const dispatchRedux = () => {
    console.log(store.getState(), 'redux数据');
  };
  const jumpUrl = () => {
    store.getState().jumpUrl('/mic/vue/table-detail');
  };
  return (
    <Fragment>
      <Descriptions title="操作/通信" layout="vertical">
        <Descriptions.Item label="原生通信">
          <div onClick={dispatchData('景区标签')}>原生通信</div>
        </Descriptions.Item>
        <Descriptions.Item label="REDUX通信">
          <div onClick={dispatchRedux}>REDUX通信</div>
        </Descriptions.Item>
        <Descriptions.Item label="到vue详情页">
          <div style={{ cursor: 'pointer' }} onClick={jumpUrl}>
            跳转
          </div>
        </Descriptions.Item>
      </Descriptions>

      {!isLoading && (
        <Descriptions title="景区概况" layout="vertical">
          <Descriptions.Item label="景区名称">
            <Tag color="purple">{data.name}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="景区标签">{data && data['tags'][0]} </Descriptions.Item>
          <Descriptions.Item label="景区开放时间">
            {data.open_time} - {data.close_time}
          </Descriptions.Item>
          <Descriptions.Item label="用时参考">{data.duration_text}</Descriptions.Item>
          <Descriptions.Item label="咨询电话">{data.tel} </Descriptions.Item>
          <Descriptions.Item label="景区地址">{data.address.detail_address}</Descriptions.Item>
          <Descriptions.Item label="交通攻略">{data.traffic}</Descriptions.Item>
          <Descriptions.Item label="温馨提示">{data.tips}</Descriptions.Item>
          <Descriptions.Item label="景区介绍">{data.description}</Descriptions.Item>
          <Descriptions.Item label="景区图片">
            {!!data.photos.length &&
              data.photos.map((item) => {
                return (
                  <div key={item.key}>
                    <Image
                      style={{ marginBottom: 10 }}
                      width={200}
                      src={item.url}
                      alt={item.title}
                    />
                  </div>
                );
              })}
          </Descriptions.Item>
        </Descriptions>
      )}
    </Fragment>
  );
};

export default Index;
