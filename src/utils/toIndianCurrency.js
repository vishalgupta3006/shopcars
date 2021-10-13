export const toIndianCurrency = (num) => {
  if(!num) return;
  let curr = num.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR'
  });
  curr = curr.substring(0, curr.indexOf('.'));
  return curr;
};