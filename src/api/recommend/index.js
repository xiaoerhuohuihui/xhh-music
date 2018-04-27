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
// const baseUrl = `https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg`
import axios from 'axios'
export const getRecommend = () => {
  const url = `/musicapi/getRecommend`
  const params = { 
    g_tk : 5381, 
    uin : 0 ,
    format : 'json' ,
    inCharset : 'utf - 8' ,
    outCharset : 'utf - 8' ,
    notice : 0 ,
    platform : 'h5' ,
    needNewCode : 1 ,
    _ : Date.now(),
  }
  return axios.get(url,{params}).then(res=>{
    return Promise.resolve(res)
  }).catch(err=>{
    console.log(err);
  })
}


