import React, { Fragment, useState } from 'react';
import { Button, Divider, Input, InputNumber } from 'antd';

const Index = (props) => {
  const [val, setVal] = useState(null);

  const jumpUrl = () => {
    props.history.push('/list');
  };
  const setStorage = () => {
    localStorage.setItem('input', val);
  };
  const onChange = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };

  return (
    <Fragment>
      <div style={{ padding: 20 }}>
        <Input
          value={val}
          style={{ width: 200 }}
          type={'number'}
          onChange={onChange}
          placeholder="设置localStorage内容"
        />
        <Divider type="vertical" />
        <Button onClick={setStorage}>设置localStorage</Button>
        <Divider type="vertical" />
        <Button onClick={jumpUrl}>跳转到列表页</Button>
      </div>
    </Fragment>
  );
};

export default Index;
