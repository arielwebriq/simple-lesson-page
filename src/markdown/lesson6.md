---
title: 6. Component LifeCycle
order: 5
---

<h2>Component LifeCycle - Proper way of setState</h2>


1. Do initial set-up of state
2. Create a function.
3. And make sure to bind it.

FOR EXAMPLE:

```
	constructor(props) {
		super(props)
		this.state = {
			category: "Backpacks",
			clicked: false,
		}
		this.onCategory = this.onCategory.bind(this)
	}
	onCategory(title) {
		this.setState({
			category: title.category,
			clicked: true,
		})
	}

```

2 Important Notes:
- Passing array values example:
```
onClick={title =>
	this.onCategory({
		category: "Backpacks",
	})
```
- When passing for 1 data only. Like true or false.
```
	onClick={() => this.onCategory(true)}
```