# ui-design-components

> tookitaki react ui components in common, based on [Ant Design](https://ant.design)

## Add ui-design-components package on your project
1. `yarn add https://github.com/tookitaki/ui-design-components.git`
2. `yarn add antd`
3. You're good to go!

## Fetch ui-design-components updates for your project
1. `yarn upgrade ui-design-components`
2. You're good to go!

## Setting up development environment to add more components to the library:

### Install

```bash
npm install ./[path to this project]
```

### Usage

#### before you go, setup the css from your app's entry

```js
import 'antd/dist/antd.css'
```

#### then you can do

```jsx
import React, { Component } from 'react'

import {MyComponent } from 'ui-design-components'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

### Example

Go inside example folder and run

```bash
yarn start
```

### Customization

There are two parts to be customized,
1. the sass files under theme directory, which control basic colors
2. the ant design customization by referring [Ant Design Theme](https://ant.design/docs/react/customize-theme)

## License

MIT
