# simple-json-renderer

A simple JSON renderer. Take a look at this [sample](http://yifanzz.github.io/simple-json-renderer/sample.html)

##How to use

Include the `simple-json-renderer.js` and `simple-json-renderer.css` in your html. Or you may choose to use the cdn links provided by the nice people at RawGit and here are some code for copy and pasting:
```
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/yifanzz/simple-json-renderer/<version>/simple-json-renderer.css">
<script src="https://cdn.rawgit.com/yifanzz/simple-json-renderer/<version>/simple-json-renderer.js"></script>
```

There's only one function 

```javascript
/**
 * @param selector CSS select to select the DOM element to render the object in
 * @param obj the stuff to render, could be an Object, Array or pure value
 */
renderObject(selector, obj)
```

##What does it look like

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
