import React, {Fragment} from "react"
import {Descriptions, Tag, Image} from 'antd';
import {useFetch} from "../../hooks"

import "./index.css"

const Index = (props) => {
  const {match: {params: {id}}} = props;
  const [{data: {data}, isLoading}] = useFetch(`https://api.justcome.cn/scenic/${id}?admin=true`, {})

  const jumpGo = () => {
    props.history.go(-1);
  }
  return (
    <Fragment>
      {
        !isLoading &&
        <Descriptions title="景区概况" layout="vertical">
          <Descriptions.Item label="景区名称"><Tag color="purple" onClick={jumpGo}>{data.name}</Tag></Descriptions.Item>
          <Descriptions.Item label="景区标签">{data && data['tags'][0]}</Descriptions.Item>
          <Descriptions.Item label="景区开放时间">{data.open_time} - {data.close_time}</Descriptions.Item>
          <Descriptions.Item label="用时参考">{data.duration_text}</Descriptions.Item>
          <Descriptions.Item label="咨询电话">{data.tel} </Descriptions.Item>
          <Descriptions.Item label="景区地址">{data.address.detail_address}</Descriptions.Item>
          <Descriptions.Item label="交通攻略">{data.traffic}</Descriptions.Item>
          <Descriptions.Item label="温馨提示">{data.tips}</Descriptions.Item>
          <Descriptions.Item label="景区介绍">{data.description}</Descriptions.Item>
          <Descriptions.Item label="景区图片">
            {
              !!data.photos.length && data.photos.map((item) => {
                return (
                  <div key={item.key}>
                    <Image
                      style={{marginBottom: 10}}
                      width={200}
                      src={item.url}
                      alt={item.title}
                    />
                  </div>
                )
              })
            }

          </Descriptions.Item>
        </Descriptions>
      }
    </Fragment>
  )
}

export default Index