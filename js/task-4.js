function getShippingCost(country) {
  // rishennya
  const feeChina = 100;
  const feeChile = 250;
  const feeAustralia = 170;
  const feeJamaica = 120;

  switch (country) {
    case 'China':
      return `Shipping to ${country} will cost ${feeChina} credits`;
      break;
    case 'Chile':
      return `Shipping to ${country} will cost ${feeChile} credits`;
      break;
    case 'Australia':
      return `Shipping to ${country} will cost ${feeAustralia} credits`;
      break;
    case 'Jamaica':
      return `Shipping to ${country} will cost ${feeJamaica} credits`;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
