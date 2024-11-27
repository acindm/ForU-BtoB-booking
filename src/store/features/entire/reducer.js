import * as actionTypes from "./constants"

const initialState = {
  currentPage: 0,  //二级浏览页面，分页部分的“当前页码”
  isLoading: false,  
  roomList: [],  //房间列表
  totalCount: 0  //页码总数
}


function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_LOADING:
      return { ...state, isLoading: action.isLoading }
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    default:
      return state
  }
}

export default reducer
