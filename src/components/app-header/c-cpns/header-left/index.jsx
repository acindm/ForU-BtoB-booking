import React, { memo } from 'react'
import { LeftWrapper } from './style'
import ForUImage from '@/assets/img/ForU.png';
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const Navigate = useNavigate()
function logoClickHandle() {
    Navigate("/home")
  }

  return (
    <LeftWrapper>
      <div className='logo' onClick={logoClickHandle}>
      <img className="logo-img" src={ForUImage} alt="big-logo" />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft