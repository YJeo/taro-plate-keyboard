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

  onShift () {
    const { isChineseKey } = this.state
    this.setState({ isChineseKey: !isChineseKey })
  }

  onMainKey (key) {
    console.log('key:', key)
  }

  onClose () {
    console.log('onClose')
  }

  onDelete () {
    console.log('onDelete')
  }

  render () {
    const { isChineseKey } = this.state
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <PlateKeyboard
          isChineseKey={isChineseKey}
          onShift={() => this.onShift()}
          onMainKey={(key) => this.onMainKey(key)}
          onClose={() => this.onClose()}
          onDelete={() => this.onDelete()}
        />
      </View>
    )
  }
}
