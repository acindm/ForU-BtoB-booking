import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import HYRequest from '@/services'
import { useState } from 'react'

import { fetchHomeAllDataAction } from '@/store/features/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'


const Home = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeAllDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <h2>Home Page</h2>
    </HomeWrapper>
  )
})

export default Home