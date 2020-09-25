import React, {Fragment, useState} from "react"
import {Table, Avatar} from "antd"
import {useFetch} from "@/hooks"
import {Link} from "react-router-dom"

import "./index.css"

const Index = () => {
  const [current, setCurrent] = useState(1)
  const [{data, isLoading}, setUrl] = useFetch('https://api.justcome.cn/admin/1068068178288054272/scenics?offset=0&limit=10&includeShop=true', {})


  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      width: 50,
      align: 'left',
    },
    {
      title: '名称',
      dataIndex: 'name',
      render: (text) => {
        return <Link to="/">{text}</Link>
      }
    },
    {
      title: '图片',
      dataIndex: 'cover',
      render: (text) => {
        return <Avatar size={40} src={text}/>
      }
    },
    {
      title: '时间',
      dataIndex: 'created_date',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '操作',
      render: (text, record) => {
        return (
          <Link to={'/detail/' + record.id}>编辑</Link>
        )
      }
    },
  ]
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows);
    }
  };
  const handleChange = (current) => {
    setCurrent(current)
    const cur = (current - 1) * 10
    setUrl(`https://api.justcome.cn/admin/1068068178288054272/scenics?offset=${cur}&limit=10&includeShop=true`)
  }
  return (
    <Fragment>
      <h2 className="experimentalStyleIsolation">查看样式沙箱</h2>

      <Table rowSelection={rowSelection}
             locale={{emptyText: '暂无数据'}}
             rowKey="id"
             dataSource={data.data}
             columns={columns}
             loading={isLoading}
             pagination={{
               showTotal(total) {
                 return `总共${total}条`
               },
               pageSize: 10,
               total: data.total,
               current,
               onChange: handleChange
             }}
      />
    </Fragment>
  )
}

export default Index