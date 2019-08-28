import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import PlateKeyboard from '../../components/Keyboard'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    isChineseKey: true,
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onShift (isChineseKey) {
    this.setState({ isChineseKey })
  }

  onMainKey (key) {
    console.log('key:', key)
  }

  render () {
    const { isChineseKey } = this.state
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <PlateKeyboard
          isChineseKey={isChineseKey}
          onShift={(val) => this.onShift(val)}
          onMainKey={(key) => this.onMainKey(key)}
        />
      </View>
    )
  }
}
