// const baseUrl = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg`
//获取排行列表内的歌曲
import axios from 'axios'
export const getMusicList = (topid)=>{
    const url = `/musicapi/getMusicList`
    const params = {
        g_tk: 5381,
        uin: 0,
        format: `json`,
        inCharset: 'utf-8',
        outCharset: `utf-8`,
        notice: 0,
        platform: `h5`,
        needNewCode: 1,
        tpl: 3,
        page: `detail`,
        type: `top`,
        topid: topid,   //排行ID
        _: Date.now(),
    }
    return axios.get(url,{params}).then(res=>{
        return Promise.resolve(res)
      }).catch(err=>{
        console.log(err);
      })
}

//获取排行列表
export const getTopList = ()=>{
    // const url =  ` https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?`
    const url =  `/musicapi/getTopList`
    const params = {
        g_tk: 5381,
        uin: 0,
        format: `json`,
        inCharset: 'utf-8',
        outCharset: `utf-8`,
        notice: 0,
        platform: `h5`,
        needNewCode: 1,
        topid: 3,   //排行ID
        _: Date.now(),
    }
    return axios.get(url,{params}).then(res=>{
        return Promise.resolve(res)
      }).catch(err=>{
        console.log(err);
      })
}

//专辑
export const getalbum = (albummid) => {
    //https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg
    const url = `/musicapi/getalbum`
    const params = {
        albummid: albummid, //'001ZRoqG1ypbfW',  // ?albummid=001ZRoqG1ypbfW  专辑ID
        g_tk: 5381,
        uin: 0,
        format: `json`,
        inCharset: 'utf-8',
        outCharset: `utf-8`,
        notice: 0,
        platform: `h5`,
        needNewCode: 1,
        _: Date.now(),

    }
    return axios.get(url,{params}).then(res=>{
        return Promise.resolve(res)
      }).catch(err=>{
        console.log(err);
      })
}

export const getalbumimgurl = (albummid)=>{
    //https://y.gtimg.cn/music/photo_new/T002R150x150M000001ZRoqG1ypbfW.jpg?max_age=2592000
    return `https://y.gtimg.cn/music/photo_new/T002R150x150M000${albummid}.jpg?max_age=2592000`
                                                    
}

