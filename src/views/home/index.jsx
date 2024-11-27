import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HYRequest from '@/services'
import { useState } from 'react'

import { fetchHomeAllDataAction } from '@/store/features/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'


const Home = memo(() => {

    /** 从redux中获取数据 */
    const { goodPriceInfo } = useSelector((state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }), shallowEqual)


  //派发异步事件，发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeAllDataAction("xxxx"))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <h2>Home Page</h2>
        <ul>
          {/* {
          goodPriceInfo.list.map(item => {
            return <li key={item.id}>{item.title}</li>
          })
          } */}
        </ul>
        </div>
    </HomeWrapper>
  )
})
Home.propTypes = {}

export default Home