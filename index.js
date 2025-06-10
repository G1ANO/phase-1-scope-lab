var customerName = 'bob';
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = 'not bob'; // no `var`, `let`, or `const` used — creates global variable!
}
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'someone';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}
