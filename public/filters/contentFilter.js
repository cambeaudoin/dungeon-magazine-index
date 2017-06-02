app.filter('contentFilter', function () {
  return function (items, toFilter) {
    if (items) {
      if (toFilter) {
        var keys = Object.keys(toFilter);
        var filtered = [];
        keys.forEach(function (key) {
          // if (toFilter[key]) {
            filtered = items.filter(function (item) {
              if (typeof toFilter[key] === 'string') {
                return (toFilter[key] ? item[key].toLowerCase().includes(toFilter[key].toLowerCase()) : item);
              }
              return (toFilter[key] ? toFilter[key] === item[key] : item);
            })
          // } else {
          //   filtered = items;
          // }
          // if (filtered.length === 0) {
          // }
        })
        return filtered;
      }
      return items;
    }
  }
})