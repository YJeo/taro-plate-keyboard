# Taro Plate Keyboard

> This project is a license plate keyboard developed by Taro framework.
>
> Currently, `WeChat` / `alipay` / `baidu` / `ByteDance` / `QQ` applet and `H5` are supported.

## Getting Started

#### Installation

```
# npm
$ npm install taro-plate-keyboard

# OR yarn
$ yarn add taro-plate-keyboard

# OR cnpm
$ cnpm install taro-plate-keyboard
```

#### Basic Usage

```javascript
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

import PlateKeyboard from 'taro-plate-keyboard'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    isChineseKey: true, // 键盘类型（true: 中文键盘；false: 数字、字母键盘）
  }

  onShift () {
    // 键盘类型切换键事件监听处理函数
  }

  onMainKey (key) {
    // 键盘主键事件监听处理函数
    // key: string类型键值
  }

  onDelete () {
    // 键盘删除键事件监听处理函数
  }

  onClose () {
    // 键盘关闭键事件监听处理函数
  }

  render () {
    const { isChineseKey } = this.state
    return (
      <View className='index'>
        <PlateKeyboard
          isChineseKey={isChineseKey}
          onShift={() => this.onShift()}
          onMainKey={(key) => this.onMainKey(key)}
          onDelete={() => this.onDelete()}
          onClose={() => this.onClose()}
        />
      </View>
    )
  }
}

```

#### Properties

| Prop         |        Default        |  Type  | Description                                                  |
| ------------ | :-------------------: | :----: | ------------------------------------------------------------ |
| isChineseKey |         true          | `bool` | If `true`, this keyboard will switch to a Chinese keyboard, and conversely, to a numeric and alphabetic keyboard. |
| onMainKey    | (key: string) => null | `func` | Callback when the primary key is pressed.                    |
| onShift      |      () => null       | `func` | Callback when the toggle key is pressed.                     |
| onDelete     |      () => null       | `func` | Callback when the delete key is pressed.                     |
| onClose      |      () => null       | `func` | Callback when the close key is pressed.                      |

