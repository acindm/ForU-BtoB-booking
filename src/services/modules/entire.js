import HYRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) { // 偏移数量：20
  return HYRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}
