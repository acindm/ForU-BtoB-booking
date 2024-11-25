import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className='search-bar'>
        <div className='text'>
          Search...
        </div>
        <div className='icon'>
          <IconSearchBar/>
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter