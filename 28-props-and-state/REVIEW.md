![cf](http://i.imgur.com/7v5ASc8.png) Daily Review
==================================================

**In addition changing the values of `state` properties what does** [getState()](https://css-tricks.com/understanding-react-setstate/) **do?**

---

**What the following code enable us to do?** (hint: It's not 'magic')
```javascript
module.exports = (param) => {

  return (req, res, next) => {
    // magic
    next();
  }

}
```

---

**What will be the output of these loops?**
```javascript
for( let x=1; x<=10; x++ ) {
  let i = x;
  console.log(x, i++, i );
}

for( let x=1; x<=10; x++ ) {
  let i = x;
  console.log(x, ++i, i );
}
```

---

**Given the markup and jQuery below...*

* how many event listenters would the DOM create?**
* what would happen on a click of one of the menu items?

```javascript
<nav>
  <ul>
    <li><a href="/">home</a></li>
    <li><a href="/about">about</a></li>
    <li><a href="/store">buy stuff</a></li>
  </ul>
</nav>

$('a').on('click', doTheThing);
$('nav').on('click','a', doSomethingElse);

function doTheThing() {
    console.log('Did the thing');
}

function doSomethingElse () {
    console.log('Did something else');
}

```
