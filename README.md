# simple-json-renderer

A simple JSON renderer that utilises d3 to render

####Object

By default an object will render into something that looks like

```javascript
{
  someAttribute: 2
  someDetailedAttribute: {...}
  someArrayAttribute: {...}
}
```
All attributes are not expanded unless the values are neither Object or Array


####Array

It will either show the value of the element or expand it to the first level of element if it is an object 

```javascript
[
  2
  {
    a: 1
  }
  {
    a: 3
  }
]
```

####Mixture of stuff

It can also render the mixture of Object, Array and other values fine

```javascript
[
  112121
  {
    justAValue : 2
    object : {
      objectInsideAObject : {...}
    }
    array : [...]
    yetAnotherAttribute : 15
  }
]
```
