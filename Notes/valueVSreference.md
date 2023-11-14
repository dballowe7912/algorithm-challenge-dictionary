# Value vs. Reference

Value types store the value of the variable itself, while reference types store a reference to the value.
Variables of reference types store references to their data (objects), while variables of value types directly contain their data. With reference types, two variables can reference the same object; therefore, operations on one variable can affect the object referenced by the other variable. If you change the value of a reference type variable, the change will be reflected in all variables that refer to the same object.

```js
var a = 1;
var b = a;
```

In this case above, `a` and `b` are both value types.

```js
var c = {
  name: 'John Doe',
};
var d = c;
```

In this case, `c` and `d` are reference types. They both store a reference to the same object.
if you change the value of a value type variable, the change will not be reflected in other variables that refer to the same value. However, if you change the value of a reference type variable, the change will be reflected in all variables that refer to the same object.
