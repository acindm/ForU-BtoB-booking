import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  //组件下拉面板状态定义
  const [ showPanel, setShowPanel ] = useState(false)

  //全局事件监听，打开下拉面板后，点击页面任何位置关闭下拉面板
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener("click", windowHandleClick)
    return () => {
      window.removeEventListener("click", windowHandleClick)
    }
  }, [])
//点击下拉面板按钮，展开面板；
//（新增功能）展开状态下点击下拉面板按钮，关闭面板
  function profileClickHandle(event) {
    event.stopPropagation()
    setShowPanel(prevState => !prevState)
  }
  
  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>民宿信息发布</span>
        <span className='btn'>
          <IconGlobal/>
        </span>
      </div>

      <div className='profile' onClick={profileClickHandle}>
        <IconMenu/>
        <IconAvatar/>

        { showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>历史浏览记录</div>
              <div className='item'>帮助中心</div>
            </div>
          </div>
        ) }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight