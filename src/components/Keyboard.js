import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './Keyboard.scss'
import Utils from '../utils/index'

import keyBg from '../assets/keyboard/key_bg.png'
import fKeyBg from '../assets/keyboard/fkey_bg.png'
import deleteKey from '../assets/keyboard/delete.png'

class PlateKeyboard extends Component {
  constructor (props) {
    super(props)
  }

  state = {

  }

  componentDidMount () {
    if (Taro.getEnv() === 'WEB') {
      Utils.imgEventListener() // 图片点击监听，禁止图片点击放大
    }
  }

  onClose = () => { // 关闭
    const { onClose } = this.props
    if (onClose) {
      onClose()
    }
  }

  onShift = () => { // 键盘切换
    const { onShift } = this.props
    if (onShift) {
      onShift()
    }
  }

  onDelete = () => { // 删除键点击事件
    const { onDelete } = this.props
    if (onDelete) {
      onDelete()
    }
  }

  onMainKey = (key) => { // 主键点击事件
    const { onMainKey } = this.props
    const { value = '' } = key
    if (onMainKey) {
      onMainKey(value)
    }
  }

  render () {
    const {
      isChineseKey = true, // 键盘类型（true: 汉字键盘, false: 数字、字母键盘）
    } = this.props

    const keyList = isChineseKey ? Utils.chineseList : Utils.numLetterList // 键表:汉字/字母、数字
    const shiftKey = isChineseKey ? 'ABC' : '返回' // 切换键文本

    return (
      <View className='pkd-wrapper'>
        <View className='pkd-close-bar'>
          <Text
            className='pkd-close'
            onClick={this.onClose}
          >
            关闭
          </Text>
        </View>
        <View className='pkd-key-panel'>
          {
            keyList.map(row => (
              <View
                className={`pkd-row ${row.rId === 0 ? 'pkd-margin-top-13x' : ''}`}
                key={row.rId}
              >
                {/* 输入法切换键 */}
                {
                  row.rId === 3 ? (
                    <View
                      className='pkd-fkey'
                      onClick={this.onShift}
                    >
                      <Image
                        className='pkd-fkey-bg'
                        src={fKeyBg}
                      />
                      <Text className='pkd-key-value'>{shiftKey}</Text>
                    </View>
                  ) : null
                }

                {/* 主键盘区 */}
                {
                  row.keys.map(key => (
                    <View
                      className='pkd-key'
                      key={key.id}
                      onClick={this.onMainKey.bind(this, key)}
                    >
                      <Image
                        className='pkd-key-bg'
                        src={keyBg}
                      />
                      <Text className='pkd-key-value'>{key.value}</Text>
                    </View>
                  ))
                }

                {/* 删除键 */}
                {
                  row.rId === 3 ? (
                    <View
                      className='pkd-fkey'
                      onClick={this.onDelete}
                    >
                      <Image
                        className='pkd-fkey-bg'
                        src={fKeyBg}
                      />
                      <Image
                        className='pkd-delete-key'
                        src={deleteKey}
                      />
                    </View>
                  ) : null
                }
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

export default PlateKeyboard
