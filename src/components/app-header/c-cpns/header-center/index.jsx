import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo, useState } from 'react'
import { CenterWrapper } from './style'
import { CSSTransition } from "react-transition-group"
import SearchTitles from "@/assets/data/search_titles"
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props

  const [tabIndex, setTabIndex] = useState(0)
  const titles = SearchTitles.map(item => item.title)

  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick()
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={isSearch}
        timeout={250}
        classNames='bar'
        unmountOnExit={true}
      >
      <div className='search-bar' onClick={searchBarClickHandle}>
        <div className='text'>
          Search...
        </div>
        <div className='icon'>
          <IconSearchBar/>
        </div>
      </div>
      </CSSTransition>
      <CSSTransition
        in={!isSearch}
        timeout={250}
        classNames='detail'
        unmountOnExit={true}
      >
        <div className='search-detail'>
          <SearchTabs titles={titles} tabClick={setTabIndex}/>
          <div className='infos'>
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter