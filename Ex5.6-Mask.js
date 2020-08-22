const maskify = (str) => {
  const dash = '#';
  if (str.length <= 4) return str;
  return dash.repeat(str.length-4) + str.substr(str.length-4);
}

console.log(maskify('4556364607935616'));