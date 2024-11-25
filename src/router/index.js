import React from "react"
import { Navigate } from "react-router-dom"
// const Home = React.lazy(() => import("../views/home"))
import Home from "@/views/home"
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
    //空路径自动重定向到home页面
  {
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
  }
]

export default routes
