var renderObject = (function (d3, _) {

  function renderObj(obj) {
    var elem = d3.select(this)

    if (_.isPlainObject(obj)) {
      elem.classed('object', true)
      elem.append('span').text('{')
      var list = elem.append('ul')

      _.forEach(obj, function (value, key) {
        var item = list.append('li')
        item.append('a')
          .text(key + ' : ')
          .on('click', toggleExpandedState)

        item.each(_.partial(renderObj, value))
      })
      elem.append('span').text('}')

    } else if (_.isArray(obj)) {

      elem.classed('array', true)
      elem.append('span').text('[')
      var list = elem.append('ul')
      _.forEach(obj, function (value, key) {
        list.append('li')
          .each(_.partial(renderObj, value))
      })
      elem.append('span').text(']')

    } else {
      elem.classed('value', true)
      elem.append('i')
        .text(obj)
    }
  }

  function toggleExpandedState() {
    var listHeader = d3.select(this)
    listHeader.classed('expanded', !listHeader.classed('expanded'))
  }

  return function (selector, obj) {
    var elem = d3.select(selector)

    elem.selectAll('*').remove()

    elem
      .classed('expandable-list', true)
      .each(_.partial(renderObj, obj))
  }
})(d3, _)
