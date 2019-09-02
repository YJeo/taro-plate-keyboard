import Taro from '@tarojs/taro'

// 汉字列表
const chineseList = [
  {
    rId: 0,
    keys: [
      { id: 0, value: '京' },
      { id: 1, value: '沪' },
      { id: 2, value: '粤' },
      { id: 3, value: '津' },
      { id: 4, value: '冀' },
      { id: 5, value: '晋' },
      { id: 6, value: '蒙' },
      { id: 7, value: '辽' },
      { id: 8, value: '吉' },
      { id: 9, value: '黑' },
    ],
  },
  {
    rId: 1,
    keys: [
      { id: 10, value: '苏' },
      { id: 11, value: '浙' },
      { id: 12, value: '皖' },
      { id: 13, value: '闽' },
      { id: 14, value: '赣' },
      { id: 15, value: '鲁' },
      { id: 16, value: '豫' },
      { id: 17, value: '鄂' },
      { id: 18, value: '湘' },
      { id: 19, value: '桂' },
    ],
  },
  {
    rId: 2,
    keys: [
      { id: 20, value: '琼' },
    { id: 21, value: '渝' },
    { id: 22, value: '川' },
    { id: 23, value: '贵' },
    { id: 24, value: '云' },
    { id: 25, value: '藏' },
    { id: 26, value: '陕' },
    { id: 27, value: '甘' },
    { id: 28, value: '青' },
    { id: 29, value: '宁' },
    ],
  },
  {
    rId: 3,
    keys: [
      { id: 30, value: '新' },
      { id: 31, value: '使' },
      { id: 32, value: '领' },
      { id: 33, value: '警' },
      { id: 34, value: '学' },
      { id: 35, value: '港' },
      { id: 36, value: '澳' },
    ],
  },
]

// 数字、字母列表
const numLetterList = [
  {
    rId: 0,
    keys: [
      { id: 0, value: '1' },
      { id: 1, value: '2' },
      { id: 2, value: '3' },
      { id: 3, value: '4' },
      { id: 4, value: '5' },
      { id: 5, value: '6' },
      { id: 6, value: '7' },
      { id: 7, value: '8' },
      { id: 8, value: '9' },
      { id: 9, value: '0' },
    ],
  },
  {
    rId: 1,
    keys: [
      { id: 10, value: 'Q' },
      { id: 11, value: 'W' },
      { id: 12, value: 'E' },
      { id: 13, value: 'R' },
      { id: 14, value: 'T' },
      { id: 15, value: 'Y' },
      { id: 16, value: 'U' },
      { id: 17, value: 'I' },
      { id: 18, value: 'O' },
      { id: 19, value: 'P' },
    ],
  },
  {
    rId: 2,
    keys: [
      { id: 20, value: 'A' },
      { id: 21, value: 'S' },
      { id: 22, value: 'D' },
      { id: 23, value: 'F' },
      { id: 24, value: 'G' },
      { id: 25, value: 'H' },
      { id: 26, value: 'J' },
      { id: 27, value: 'K' },
      { id: 28, value: 'L' },
    ],
  },
  {
    rId: 3,
    keys: [
      { id: 30, value: 'Z' },
      { id: 31, value: 'X' },
      { id: 32, value: 'C' },
      { id: 33, value: 'V' },
      { id: 34, value: 'B' },
      { id: 35, value: 'N' },
      { id: 36, value: 'M' },
    ],
  },
]

// WEB环境，图片点击事件监听，禁止浏览器点击图片放大
const imgEventListener = () => {
  if (Taro.getEnv() !== 'WEB') {
    return
  }
  const imgs = document.getElementsByTagName('img')
  for (let i = 0; i < imgs.length; i += 1) {
    imgs[i].addEventListener("click", function (e) {
      e.preventDefault()
    })
  }
}

export default {
  chineseList,
  numLetterList,
  imgEventListener,
}
