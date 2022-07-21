
function filterByCity(targetCity, listingCityArray) {
  let index = [];
  
  for(let i = 0; i < listingCityArray.length; i++) {
    if(listingCityArray[i].toLowerCase() == targetCity.toLowerCase()) {
      index.push(i);
    }
  } 
  
  return index;
}

filterByCityTest();


function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let index = [];
  
  for(let i = 0; i < listingPriceArray.length; i++) {
    let price = listingPriceArray[i];
    if(price <= maxPrice && price >= minPrice) {
      index.push(i);
    }
  }
  
  return index;
}

filterByPriceTest()


// LEVEL UP!
function filterByTypes(targetTypes, listingTypeArray) {
  let index = [];

  for(let i = 0; i < listingTypeArray.length; i++) {
    for(let j = 0; j < targetTypes.length; j++) {
      if(listingTypeArray[i] == targetTypes[j]) {
        index.push(i);
      }
    }
  }
 
  return index;
}

filterByTypesTest();