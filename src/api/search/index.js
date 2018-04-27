// 
// g_tk: 5381
// uin: 0
// format: json
// inCharset: utf-8
// outCharset: utf-8
// notice: 0
// platform: h5
// needNewCode: 1
// w: 冯提莫
// zhidaqu: 1
// catZhida: 1
// t: 0
// flag: 1
// ie: utf-8
// sem: 1
// aggr: 0
// perpage: 20
// n: 20
// p: 1
// remoteplace: txt.mqq.all
// _: 1524390897433
import axios from 'axios'
export const searchMusic = (keywords,p) => {
  const url = `/musicapi/searchMusic`
  const params = {
    g_tk: 5381,
    uin: 0,
    format: `json`,
    inCharset: `utf-8`,
    outCharset: `utf-8`,
    notice: 0,
    platform: `h5`,
    needNewCode: 1,
    w: keywords,
    zhidaqu: 1,
    catZhida: 1,
    t: 0,
    flag: 1,
    ie: `utf-8`,
    sem: 1,
    aggr: 0,
    perpage: 20, //一次搜索显示数量
    n: 20, //一次搜索显示数量
    p: p,   //显示第几页
    remoteplace: `txt.mqq.all`,
    _: Date.now(),
    
  }
  return axios.get(url,{params}).then(res=>{
    return Promise.resolve(res)
  }).catch(err=>{
    console.log(err);
  })
}
