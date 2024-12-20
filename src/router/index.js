import React from "react"
import { Navigate } from "react-router-dom"

// home、entire、detail组件使用懒加载引入
const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  {
    //自动重定向到home页面
    path: "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/entire",
    element: <Entire/>
  },
  {
    path: "/detail",
    element: <Detail/>
  },
    {
      path: "/demo",
      element: <Detail/>
    }
]

export default routes
