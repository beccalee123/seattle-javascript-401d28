![cf](http://i.imgur.com/7v5ASc8.png) Daily Review
==================================================

**Given this express server setup, what would render on a request to http://localhost/foobar**

```
  app.use('*', notFoundPage);
  app.use('/foobar', (req,res) => res.send('FOO!'));
```

---

**What is the best way to traverse a tree to evaluate the leaves?**

1. While Loop
1. Recursion
1. For Loop
1. Queue

---

**What would happen in this middleware function if req.query.name was empty?**

```
  const awesomeMiddleware = (req,res,next) => {
    if ( req.query.name ) {
      req.query.realPerson = true;
      next();
    }
    next('Not a human. Run!!!');
  }
```

---

**Explain the differences between these statements from an implementation standpoint**

Assume the `foo-bar` module has an exported method called `baz`, how would you call it in each case?  How might the `foo-bar` module be setup to export the method?

```
  const foobar = require('foo-bar');
  const {baz} = require('foo-bar');

  import foobar from 'foo-bar';
  import {baz} from 'foo-bar';
```
