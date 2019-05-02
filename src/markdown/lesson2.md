---
title: 2. Convert Function Component to Class Component
order: 1
---

<h2>Convert Function Component to Class Component</h2>

```
import React from 'react'
import Layout from './layout'

const Page = () => (
	<Layout>
		<div>Body Content<div>
	</Layout>
)

export default Page

```

to -->>

```
import React from 'react'
import Layout from './layout'

class Page extends React.Component{
	render(){
		return(
			<Layout>
			<div>Body Content<div>
			</Layout>
		)
	}
}

export default Page
```

Read more: https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
