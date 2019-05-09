let config = {
  timeout: 30000
}

// wdj
// 接口自动区分
const host = window.location.host
if (host === "m.fybanks.com") {//生产
  config.api = "https://mall-api.fybanks.com/"
  config.linkApi = "https://m.fybanks.com/"
  config.fullUrlPath = "https://m.fybanks.com/html/home/#/"
  config.imgServerUrl = "https://img[0].fybanks.com/"
  config.staticUrl = 'https://static.fybanks.com'
} else if (host === "m.heyoucloud.com") {//预生产
  config.api = "https://mall-api.heyoucloud.com/"
  config.linkApi = "https://m.heyoucloud.com/"
  config.fullUrlPath = "https://m.heyoucloud.com/html/home/#/"
  config.imgServerUrl = "https://img-test[0].fybanks.com/"
  config.staticUrl = 'https://static.heyoucloud.com'
} else if (host === "m.fybanks.cn") {//测试
  config.api = "https://mall-api.fybanks.cn/"
  config.linkApi = "https://m.fybanks.cn/"
  config.fullUrlPath = "https://m.fybanks.cn/html/home/#/"
  config.imgServerUrl = "https://img-test[0].fybanks.com/"
  config.staticUrl = 'https://static.fybanks.cn'
} else {//本地
  // 默认线上
  // config.api = "http://192.168.10.26:8080/"
  // config.api = "https://mall-api.fybanks.com/"
  // config.api = "https://mall-api.fybanks.cn/"
  config.api = "https://mall-api.heyoucloud.com/"
  config.linkApi = "https://m.heyoucloud.com/"
  config.fullUrlPath = "https://m.heyoucloud.com/html/home/#/"
  config.imgServerUrl = "https://img-test[0].fybanks.com/"
  config.staticUrl = 'https://static.heyoucloud.com'
}
module.exports = config

