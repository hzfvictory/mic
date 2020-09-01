import React, {Fragment} from "react"
import {Link} from "react-router-dom"

const Index = () => {

  return (
    <Fragment>
      <h1>应用</h1>
      <Link to={"/list"}>跳转到详情页</Link>
    </Fragment>
  )
}

export default Index