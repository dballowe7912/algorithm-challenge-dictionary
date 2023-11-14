function toCamelCase(str) {
  if (!str || str.length === 0) return '';
  const regex = /[-_]/g;
  const toStr = str.replace(regex, ' ');
  const strArr = toStr.split(' ');
  let result = [];
  for (let i = 1; i < strArr.length; i++) {
    result.push(firstToUpperCase(strArr[i]));
  }
  console.log(strArr[0] + result.join(''));

  function firstToUpperCase(str) {
    let firstLetter = str[0].toUpperCase();
    return firstLetter + str.slice(1);
  }
}

// can be refactored to --
// did not know a callback function could be passed to replace!!
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

toCamelCase('the-steve_tamer');
