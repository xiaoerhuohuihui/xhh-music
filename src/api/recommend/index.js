//https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg
// ?picmid=1&rnd=0.6210501346219015
// &g_tk=5381&jsonpCallback=getPlaylist
// &loginUin=0&hostUin=0&format=jsonp
// &inCharset=utf8&outCharset=utf-8
// &notice=0&platform=yqq&needNewCode=0
// &categoryId=10000000&sortId=5&sin=0&ein=29


// https: //c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg
//   ?
//   g_tk = 5381 &
//   uin = 0 &
//   format = json &
//   inCharset = utf - 8 &
//   outCharset = utf - 8 &
//   notice = 0 &
//   platform = h5 &
//   needNewCode = 1 &
//   _ = 1524379019877
const time = Date.now()
// const baseUrl = `https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg`
export const getRecommend = () => {
  //https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg
  const url = `/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?`
  const params = { 
    g_tk : 5381, 
    uin : 0 ,
    format : 'json' ,
    inCharset : 'utf - 8' ,
    outCharset : 'utf - 8' ,
    notice : 0 ,
    platform : 'h5' ,
    needNewCode : 1 ,
    _ : time,

  }
  return getUrl(url, params)
}

let getUrl = (url, params) => {
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      url += `&${key}=${params[key]}`
    }
  }
  url = url.substring(1)
  return url
}
