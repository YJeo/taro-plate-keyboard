# Taro Plate Keyborad

> This project is a license plate keyboard developed by Taro framework.
>
> Currently, `WeChat` / `alipay` / `baidu` applet and `H5` are supported.

## Getting Started

#### Installation

#### Basic Usage

#### Properties

| Prop         |           Default            |  Type  | Description                                                  |
| ------------ | :--------------------------: | :----: | ------------------------------------------------------------ |
| isChineseKey |             true             | `bool` | If `true`, this keyboard will switch to a Chinese keyboard, and conversely, to a numeric and alphabetic keyboard. |
| onMainKey    |    (key: object) => null     | `func` | Callback when the primary key is pressed.                    |
| onShift      | (isChineseKey: bool) => null | `func` | Callback when the toggle key is pressed.                     |
| onDelete     |          () => null          | `func` | Callback when the delete key is pressed.                     |
| onClose      |          () => null          | `func` | Callback when the close key is pressed.                      |

