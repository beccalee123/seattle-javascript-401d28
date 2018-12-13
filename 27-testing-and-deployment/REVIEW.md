![cf](http://i.imgur.com/7v5ASc8.png) Daily Review
==================================================

**What CSS will this SASS result in?**
```
div {

  &.foo {
    border: blue;
  }

  span {
    border: green;
  }

  & .foo {
    border:red;
  }

  .foo & {
    border: black;
  }
}
```

---

**What would happen when the user clicks the button?**
```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'App' };
  }

  changeTitle = () => {
    this.state.title = 'Foo';
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle}>Change It</button>
      </div>
    );
  }
}
```

---

**How many elements does a .map() return?  .filter()?  .reduce()?**

---

**Which data structure is best suited for the following problem domains?**

* Finding an unknown value from a set
* Drawing a list of things
* Looking up a particular, known set of information
* Performing commands in the order they were given

---

**Why are props super?**
```
class App extends React.Component {
  constructor(props) {
    super(props);
  }
```


