![cf](http://i.imgur.com/7v5ASc8.png) Daily Review
==================================================

**Explain this code - output, operation**
```
const doStuff = (a,b) => {
  if ( b === 0 ) {
    return a+b;
  }
  return doStuff(a+1,b-1);
}

console.log( doStuff(3,4) );
```

---

**In Redux, what must an action generator return?**

---

**Calculate and explain the Big O of this code block**

```javascript

function method1(arr) {
  int n = arr.length;
  for(let i = n - 1 ; i >= 0; i = i - 3)
    console.log(arr[i]); // O(1)
  }
}

function method2(arr) {
  for(int i = 0; i <arr.length; i++) {
    for(int k = 0; k <arr.length; ++k) {
       console.log(arr[i]);
     }
  }
}

function method3(arr) {
  for(int i = 0; i <arr.length; i++) {
    method1(arr);
    method1(arr);
    method1(arr);
    method2(arr);
    method2(arr);
  }
}
```

https://gist.github.com/vladimirsan/0b3afa7c5c639b9b33b733baff27d1ac
