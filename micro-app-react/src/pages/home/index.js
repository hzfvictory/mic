import React, {Fragment, useState} from "react"
import {Button, Divider, Input} from "antd"

const Index = (props) => {
  const [val, setVal] = useState(null);

  const jumpUrl = () => {
    props.history.push('/list')
  }
  const setStorage = () => {
    localStorage.setItem('input', val)
  }

  return (
    <Fragment>
      <div style={{padding: 20}}>
        <Input value={val} style={{width: 200}} onChange={e => setVal(e.target.value)} placeholder="设置localStorage内容"/>
        <Divider type="vertical"/>
        <Button onClick={setStorage}>设置localStorage</Button>
        <Divider type="vertical"/>
        <Button onClick={jumpUrl}>跳转到列表页</Button>
      </div>
    </Fragment>
  )
}

export default Index