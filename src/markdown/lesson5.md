---
title: 5. Swiper Slider
order: 4
---

<h2>Implementation of Swiper Slider</h2>

Reference: https://www.npmjs.com/package/react-id-swiper <br />

Installation: <br />
<code>npm install --save react-id-swiper</code>

```
import React from 'react'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/css/swiper.css'

class Example extends React.Component {
  render() {
    return (
      <Swiper>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    )
  }
}

export default Example;
```
