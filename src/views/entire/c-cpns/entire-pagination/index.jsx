import React, { memo } from 'react'
import  Pagination from '@mui/material/Pagination'

import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/features/entire/actionCreators.js'


const EntirePagination = memo(() => {
    const { totalCount, currentPage, romeList} = useSelector(state => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      romeList: state.entire.roomList
    }), shallowEqual)
 
    const totalPage = Math.ceil(totalCount / 20)
    const startCount = currentPage * 20 + 1
    const endCount = (currentPage + 1) * 20
    
    //事件处理。点击页码切换页面，页面也要做到随之切换
    const dispatch = useDispatch()
    // 回到顶部；更新页码
    function pageChangeHandle(event, pageCount) {
      window.scrollTo(0, 0)
      dispatch(fetchRoomListAction(pageCount - 1))
    }


  return (
    <PaginationWrapper>
      {
        <div className='info'>
          <Pagination count={totalPage} onChange={pageChangeHandle}/>
          <div className='desc'>
          第 {startCount} - {endCount} 个, 共 {totalCount} 个结果
          </div>
        </div>
      }
    
    </PaginationWrapper>
  )
})

export default EntirePagination