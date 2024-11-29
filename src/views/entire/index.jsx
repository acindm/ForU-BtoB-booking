import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchRoomListAction } from '@/store/features/entire/actionCreators.js'

const Entire = memo(() => {
  // 发送网络请求, 获取数据, 并且保存当前的页面
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
        <EntireFilter />
        <EntireRooms/>
        <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire
