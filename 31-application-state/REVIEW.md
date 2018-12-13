![cf](http://i.imgur.com/7v5ASc8.png) Daily Review
==================================================

**In a Class Component, when must you do `super(props)`?**

1. Always
1. Only when you have a constructor function declared
1. Whenever you need to use `this.props...`

```
class Foo extends React.Component {
  constructor(props) {
    super(props);
  }
}

```

---

**What is the difference between app and component state?**

---

**When must you wrap pure javascript code in `{}` in a React component?**

1. When the javascript runs inside of JSX
1. Always
1. Never
1. When the javascript does a `return`

```javascript
  <ul>
    {
      this.props.items.map( (item,idx) =>
        <li />
      )
    }
  </ul>
```


