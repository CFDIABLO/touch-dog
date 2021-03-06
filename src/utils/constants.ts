export type DefaultOptionsType = { [key: string]: string }

export const DEFAILT_REQUEST_OPTIONS: DefaultOptionsType = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
}

export const DEFAILT_HEADERS: DefaultOptionsType = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept': '*/*',
  'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
  'Accept-Encoding': 'gzip, deflate',
  'X-Requested-With': 'XMLHttpRequest',
}


export const API: DefaultOptionsType = {
  PROXY: '//service-witt.herokuapp.com/api/v1/translate.json',
  BAIDU: '//fanyi.baidu.com/v2transapi',
  YOUDAO: '//dict.youdao.com/translate?client=deskdict&' +
  'keyfrom=chrome.extension&xmlVersion=3.2&dogVersion=1.0&ue=utf8&doctype=xml&pos=-1',
}

export const DEFAULT_QUERYS: any = {
  BAIDU: {
    from: 'en',
    to: 'zh',
    query: '',
    transtype: 'translang',
    simple_means_flag: 3,
  },
}

export const ErrorTips: DefaultOptionsType = {
  translationError: '翻译出现了错误',
  translationInterruption: '未找到合适的翻译',
  tokenError: '查找鉴权信息失败',
}

export const LOGO: string = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" height="25" width="100" viewBox="0 0 209.3119659423828 41.60000228881836"><defs id="SvgjsDefs2009"></defs><g id="SvgjsG2010" rel="mainfill" name="main_text" xmlns:name="mainText_mainfill" fill="rgba(31, 122, 97, .6)" transform="translate(-2.2400002479553223,-4.7999982833862305)"><path d="M18.944 13.279999999999998 q0 0.192 -0.144 0.336 t-0.336 0.144 l-15.744 0 q-0.192 0 -0.336 -0.144 t-0.144 -0.336 t0.144 -0.336 t0.336 -0.144 l15.744 0 q0.192 0 0.336 0.144 t0.144 0.336 z M19.104 16.384 q0 0.192 -0.144 0.352 t-0.336 0.16 l-7.424 0 l0 21.024 q0 0.192 -0.16 0.336 t-0.352 0.144 t-0.352 -0.128 t-0.16 -0.352 l0 -21.024 l-7.456 0 q-0.192 0 -0.336 -0.16 t-0.144 -0.352 t0.128 -0.368 t0.352 -0.176 l15.904 0 q0.224 0 0.352 0.176 t0.128 0.368 z M48.928 25.599999999999998 q0 2.656 -1.008 4.992 t-2.736 4.064 t-4.064 2.736 t-4.992 1.008 t-4.992 -1.008 t-4.064 -2.736 t-2.736 -4.064 t-1.008 -4.992 t1.008 -4.992 t2.736 -4.064 t4.064 -2.736 t4.992 -1.008 t4.992 1.008 t4.064 2.736 t2.736 4.064 t1.008 4.992 z M47.936 25.599999999999998 q0 -2.432 -0.928 -4.576 t-2.544 -3.76 t-3.76 -2.544 t-4.576 -0.928 t-4.576 0.928 t-3.76 2.544 t-2.544 3.76 t-0.928 4.576 t0.928 4.576 t2.544 3.76 t3.76 2.544 t4.576 0.928 t4.576 -0.928 t3.76 -2.544 t2.544 -3.76 t0.928 -4.576 z M68.736 32.064 q0 1.28 -0.48 2.432 t-1.328 2.016 t-1.984 1.376 t-2.416 0.512 l-2.464 0 q-1.312 0 -2.464 -0.496 t-2.016 -1.36 t-1.36 -2.016 t-0.496 -2.464 l0 -18.784 q0 -0.192 0.144 -0.336 t0.336 -0.144 t0.336 0.144 t0.144 0.336 l0 18.784 q0 1.088 0.432 2.064 t1.168 1.712 t1.712 1.168 t2.064 0.432 l2.464 0 q1.088 0 2.048 -0.432 t1.664 -1.168 t1.12 -1.712 t0.416 -2.064 l0 -18.784 q0 -0.192 0.144 -0.336 t0.336 -0.144 t0.336 0.144 t0.144 0.336 l0 18.784 z M94.528 34.784 q0 0.192 -0.192 0.384 q-1.728 1.632 -3.968 2.432 t-4.544 0.8 q-2.656 0 -4.992 -1.008 t-4.064 -2.736 t-2.736 -4.064 t-1.008 -4.992 t1.008 -4.992 t2.736 -4.064 t4.064 -2.736 t4.992 -1.008 q1.12 0 2.288 0.208 t2.272 0.624 t2.112 1.008 t1.84 1.392 q0.192 0.192 0.192 0.384 t-0.176 0.352 t-0.368 0.16 t-0.32 -0.128 q-0.928 -0.704 -1.824 -1.264 t-1.824 -0.944 t-1.968 -0.592 t-2.224 -0.208 q-2.432 0 -4.576 0.928 t-3.76 2.544 t-2.544 3.76 t-0.928 4.576 t0.928 4.576 t2.544 3.76 t3.76 2.544 t4.576 0.928 q2.304 0 4.192 -0.784 t3.648 -2.224 q0.16 -0.16 0.352 -0.16 t0.352 0.176 t0.16 0.368 z M115.03999999999999 37.888 q0 0.192 -0.16 0.352 t-0.352 0.16 q-0.224 0 -0.384 -0.144 t-0.16 -0.368 l0 -10.048 l-15.04 0 l0 10.048 q0 0.512 -0.48 0.512 q-0.224 0 -0.352 -0.16 t-0.128 -0.352 l0 -24.608 q0 -0.192 0.144 -0.336 t0.336 -0.144 t0.336 0.144 t0.144 0.336 l0 10.464 l15.04 0 l0 -10.464 q0 -0.224 0.176 -0.352 t0.368 -0.128 t0.352 0.144 t0.16 0.336 l0 24.608 z M113.984 26.816 l0 -2.144 l-14.976 0 l-0.032 2.144 l15.008 0 z  M155.36 25.567999999999998 q0 2.656 -1.008 4.976 t-2.736 4.048 t-4.064 2.72 t-4.96 1.024 l-4.192 0.032 q-0.224 0 -0.368 -0.16 t-0.144 -0.384 l0 -24 l-2.208 0 l0 24.064 q0 0.512 -0.512 0.512 q-0.224 0 -0.352 -0.16 t-0.128 -0.352 l0 -24.544 q0 -0.224 0.144 -0.384 t0.368 -0.16 l7.392 0 q2.624 0 4.96 1.008 t4.064 2.736 t2.736 4.064 t1.008 4.96 z M154.36800000000002 25.567999999999998 q0 -2.432 -0.928 -4.592 t-2.512 -3.744 t-3.744 -2.512 t-4.592 -0.928 q-0.928 0 -1.856 0.016 t-1.856 0.016 l0 23.52 l1.856 0 t1.856 -0.032 q2.432 -0.032 4.576 -0.96 t3.744 -2.512 t2.528 -3.712 t0.928 -4.56 z M185.12 25.599999999999998 q0 2.656 -1.008 4.992 t-2.736 4.064 t-4.064 2.736 t-4.992 1.008 t-4.992 -1.008 t-4.064 -2.736 t-2.736 -4.064 t-1.008 -4.992 t1.008 -4.992 t2.736 -4.064 t4.064 -2.736 t4.992 -1.008 t4.992 1.008 t4.064 2.736 t2.736 4.064 t1.008 4.992 z M184.12800000000001 25.599999999999998 q0 -2.432 -0.928 -4.576 t-2.544 -3.76 t-3.76 -2.544 t-4.576 -0.928 t-4.576 0.928 t-3.76 2.544 t-2.544 3.76 t-0.928 4.576 t0.928 4.576 t2.544 3.76 t3.76 2.544 t4.576 0.928 t4.576 -0.928 t3.76 -2.544 t2.544 -3.76 t0.928 -4.576 z M211.392 24.095999999999997 q0 0.192 -0.128 0.352 t-0.352 0.16 l-12.48 0 q-0.512 0 -0.512 -0.512 q0 -0.224 0.16 -0.352 t0.352 -0.128 l12.48 0 q0.192 0 0.336 0.144 t0.144 0.336 z M211.52 34.784 q0 0.224 -0.16 0.384 q-1.728 1.632 -3.968 2.432 t-4.544 0.8 q-2.656 0 -4.992 -1.008 t-4.064 -2.736 t-2.736 -4.064 t-1.008 -4.992 t1.008 -4.992 t2.736 -4.064 t4.064 -2.736 t4.992 -1.008 q2.304 0 4.528 0.8 t3.952 2.432 q0.192 0.192 0.192 0.352 q0 0.224 -0.16 0.4 t-0.384 0.176 q-0.16 0 -0.32 -0.16 q-1.728 -1.44 -3.616 -2.224 t-4.192 -0.784 q-2.432 0 -4.576 0.928 t-3.76 2.544 t-2.544 3.76 t-0.928 4.576 t0.928 4.576 t2.544 3.76 t3.76 2.544 t4.576 0.928 q2.112 0 4.08 -0.752 t3.6 -2.096 l0.032 -6.784 l-12.192 0 q-0.224 0 -0.368 -0.16 t-0.144 -0.384 q0 -0.192 0.144 -0.352 t0.368 -0.16 l12.672 0 q0.512 0 0.512 0.544 z"></path></g></svg>
`

export const STYLES: string = `
.-touch-dog {
  width: 330px;
  height: auto;
  min-height: 90px;
  background: #F6F9FB;
  padding: 0px 15px 28px;
  border-radius: 2px;
  position: fixed;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  top: 0;
  left: 0;
  background: linear-gradient(-45deg, transparent 5px, #F6F9FB 0);
  z-index: 100000;
}

.-touch-dog-logo {
  position: absolute;
  bottom: -8px;
  left: 14px;
  width: 100px;
  height: 35px;
  opacity: .3;
}
.-touch-dog-title {
  font-size: 16px;
  line-height: 23px;
  margin: 12px 0 5px;
  color: #394c5d;
  display: block;
}
.-touch-dog-list {
  width: 100%;
  list-style-type: none;
  margin: 4px 0 16px;
  padding: 0;
}
.-touch-dog-list li {
  font-size: 14px;
  list-style-type: none;
  margin-bottom: 5px;
  color: #5e6d82;
}
.-touch-dog-list li b {
  font-weight: 400;
  font-size: 15px;
  padding-right: 10px;
}
.-touch-dog-list li span {
  padding-right: 5px;
}








`
