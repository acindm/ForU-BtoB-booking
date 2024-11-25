import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import ForUImage from '@/assets/img/ForU.png';


const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='logo'>
      <img className="logo-img" src={ForUImage} alt="big-logo" />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft