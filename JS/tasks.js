'use strict'

import users from './users.js';

const getUserNames = users => {
  return users.map(user =>{
    return user.name;
  })
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = (users, color) => {
  return users.filter(({ eyeColor }) => {
    return eyeColor === color;
  });
};
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, 
// объект Carey Barr]

const getUsersWithGender = (users, genderPar) => {
  return users.filter(({gender}) =>{
    return gender === genderPar;
  })
  .map(({name})=>{
    return name
  })
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


const getInactiveUsers = users => {
  return users.filter(user => {
    return !user.isActive;
  })
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getUserWithEmail = (users, email) => {
  return users.find(user => {
    return user.email === email;
  })
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => {
  return users.filter(user =>{
    return user.age <= max && user.age >= min;
  })
  .map(({name}) => name)
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0)
 };
 
 console.log(calculateTotalBalance(users)); // 20916

 const getUsersWithFriend = (users, friendName) => {
  return users.filter(user =>{
    return user.friends.includes(friendName)
  })
  .map(({name}) => name)
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


const getNamesSortedByFriendsCount = users => {
  return users.sort((a, b) => a.friends.length - b.friends.length)
  .map(({name})=>{
    return name
  })
};

console.log(getNamesSortedByFriendsCount(users));
[ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, current) => {
      allSkills.push(...current.skills);
      return allSkills;
    }, [])
    .filter((elements, index, array) =>  {
      return index === array.indexOf(elements);
    })
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa',
//'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud',
//'nulla', 'proident', 'tempor', 'velit', 'veniam' ]