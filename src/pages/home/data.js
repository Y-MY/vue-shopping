export const productList = {
  pc: {
    title: 'PC产品1',
    noLast:true,
    list: [
      {
        name: '流量分析',
        url: 'detail/analysis',
        hot: true
      },
      {
        name: '数据统计',
        url: 'detail/count'
      },
      {
        name: '数据预测',
        url: 'detail/forecast'
      },
      {
        name: '广告发布',
        url: 'detail/publish'
      }
    ]
  },
  app: {
    title: '手机应用类',
    list: [
      {
        name: '91助手',
        url: 'http://weixin.com'
      },
      {
        name: '产品助手',
        url: 'http://twitter.com',
        hot: true
      },
      {
        name: '智能地图',
        url: 'http://maps.com'
      },
      {
        name: '团队语音',
        url: 'http://phone.com'
      }
    ]
  }
};

export const newsList = [
  {
    title: '数据统计',
    url: 'https://www.zhihu.com/'
  },
  {
    title: '数据预测',
    url: 'https://www.zhihu.com/'
  },
  {
    title: '流量分析',
    url: 'https://www.zhihu.com/'
  },
  {
    title: '广告发布',
    url: 'https://www.zhihu.com/'
  }
];

export const slides = [
  {
    src: require('../../assets/slideShow/101.jpg'),
    title: '流量分析',
    href: 'detail/analysis'
  },
  {
    src: require('../../assets/slideShow/102.jpg'),
    title: '数据统计',
    href: 'detail/count'
  },
  {
    src: require('../../assets/slideShow/103.jpg'),
    title: '数据预测',
    href: 'detail/forecast'
  },
  {
    src: require('../../assets/slideShow/104.jpg'),
    title: '广告发布',
    href: 'detail/publish'
  }
];
export const boardList = [
  {
    title: '开放产品',
    description: '开放产品是一款开放产品',
    image: 'car',
    toKey: 'analysis',
    saleout: false
  },
  {
    title: '品牌营销',
    description: '品牌营销帮助你的产品更好地找到定位',
    image: 'earth',
    toKey: 'count',
    saleout: false
  },
  {
    title: '使命必达',
    description: '使命必达快速迭代永远保持最前端的速度',
    image: 'loud',
    toKey: 'forecast',
    saleout: true
  },
  {
    title: '勇攀高峰',
    description: '帮你勇闯高峰，到达事业的顶峰',
    image: 'hill',
    toKey: 'publish',
    saleout: false
  }
];
