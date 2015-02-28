var renderObject = (function (d3, _) {

  return function (selector, obj) {
    var elem = d3.select(selector)
    elem.selectAll('*').remove()
    elem
      .classed('expandable-list', true)
      .each(_.partial(renderBlob, obj))
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
    var elem = d3.select(this)
    elem.classed('object', true)
    elem.append('span').text('{')
    var list = elem.append('ul')

    _.forEach(obj, function (value, key) {
      var item = list.append('li')
      item.append('a')
        .text(key + ' : ')
        .on('click', toggleExpandedState)

      item.each(_.partial(renderBlob, value))
    })
    elem.append('span').text('}')
  }

  function renderArray(obj) {
    var elem = d3.select(this)
    elem.classed('array', true)
    elem.append('span').text('[')
    var list = elem.append('ul')
    _.forEach(obj, function (value, key) {
      list.append('li')
        .each(_.partial(renderBlob, value))
    })
    elem.append('span').text(']')
  }

  function renderValue(obj) {
    var elem = d3.select(this)
    elem.classed('value', true)
    elem.append('i')
      .text(obj)
  }

  function toggleExpandedState() {
    var listHeader = d3.select(this)
    listHeader.classed('expanded', !listHeader.classed('expanded'))
  }
})(d3, _)
