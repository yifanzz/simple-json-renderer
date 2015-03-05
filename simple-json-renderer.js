var renderObject = (function (_) {

  return function (selector, obj) {
    var elem = document.querySelector(selector)
    elem.innerHTML = ''
    addClass(elem, 'expandable-list')
    renderBlob.call(elem, obj)
  }

  function renderBlob(obj) {
    if (_.isPlainObject(obj)) {
      renderPlainObject.call(this, obj);
    } else if (_.isArray(obj)) {
      renderArray.call(this, obj);
    } else {
      renderValue.call(this, obj);
    }
  }

  function renderPlainObject(obj) {
    addClass(this, 'object')
    this.appendChild(createNode('span', '{'))
    var list = createNode('ul')

    _.forEach(obj, function (value, key) {
      var item = createNode('li')
      list.appendChild(item)

      var itemKey = createNode('a')
      item.appendChild(itemKey)

      itemKey.text = key + ' : '
      itemKey.addEventListener('click', toggleExpandedState)

      renderBlob.call(item, value)
    })
    this.appendChild(list)
    this.appendChild(createNode('span', '}'))
  }

  function renderArray(obj) {
    addClass(this, 'array')
    this.appendChild(createNode('span', '['))
    var list = createNode('ul')
    _.forEach(obj, function (value, key) {
      var item = createNode('li')
      renderBlob.call(item, value)
      list.appendChild(item)
    })
    this.appendChild(list)
    this.appendChild(createNode('span', ']'))
  }

  function renderValue(obj) {
    addClass(this, 'value')
    this.appendChild(createNode('i', obj))
  }

  function createNode(tagName, text) {
    var elem = document.createElement(tagName)
    elem.text = text
    elem.textContent = text
    return elem
  }

  function toggleExpandedState() {
    toggleClass(this, 'expanded')
  }

  function toggleClass(node, className) {
    if (hasClass(node, className)) {
      removeClass(node, className)
    } else {
      addClass(node, className)
    }
  }

  function addClass(node, className) {
    node.className += ' ' + className
  }

  function removeClass(node, className) {
    node.className = node.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g') , '' )
  }

  function hasClass(node, className) {
    return node.className.match(new RegExp('(?:^|\\s)' + className + '(?!\\S)'))
  }
})(_)
