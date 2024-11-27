import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {
    const [selectItems, setSelectItems] = useState([])
    function itemClickHandle(item) {
        const newItems = [...selectItems]
        if (newItems.includes(item)) {  //监测是否已经添加过，已添加，执行移除操作
            const itemIndex = newItems.indexOf(filterItem => filterItem === item)
            newItems.splice(itemIndex, 1)
        } else { //添加操作
        newItems.push(item)
        }
        setSelectItems(newItems)
    }


  return (
    <FilterWrapper>
        <div className='filter'>
            {
                filterData.map((item) => {
                    return (
                        <div 
                            className={classNames("item", { active: selectItems.includes(item) })}
                            key={item}
                            onClick={e => itemClickHandle(item)}
                            >
                            {item}
                        </div>
                    )
                })
            }
        </div>
    </FilterWrapper>
  )
})

export default EntireFilter