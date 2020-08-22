const yearsAndCenturies = (year) => {
  if(year >= 1 && year <= 100){
    return 1;
  }else if(year % 100 === 0){
    return year/100;
  }else{
    return Math.round(year / 100 + 1);
  }
}

console.log(yearsAndCenturies(1210));