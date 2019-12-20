import _ from 'lodash'

// let users = [
//   { 'user': 'barney',  'active': true },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': false }
// ];

// _.dropRightWhile(users, function(o) { return !o.active; });
// // => objects for ['barney']
 
// // The `_.matches` iteratee shorthand.
// _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// // => objects for ['barney', 'fred']
 
// // The `_.matchesProperty` iteratee shorthand.
// _.dropRightWhile(users, ['active', false]);
// // => objects for ['barney']
 
// // The `_.property` iteratee shorthand.
// _.dropRightWhile(users, 'active');
// // => objects for ['barney', 'fred', 'pebbles']

// console.log(users)


var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]