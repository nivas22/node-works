// Find total age of this family tree
let profile = {
  name: "John doe",
  age: 65,
  kids: [
    {
      name: "Kate",
      age: 30,
      kids: [
        {
          name: "Peter",
          age: 5,
        },
        {
          name: "Sarah",
          age: 2,
        },
      ],
    },
  ],
};
  
const getKidsAge = (kids) => {
  let currentAge = 0;
  kids.forEach(element => {
      currentAge = currentAge + element.age;
      if(element.kids && element.kids.length > 0) {
          currentAge = currentAge + getKidsAge(element.kids);
      } 
  });
  return currentAge;
}

if(profile) {
  if(profile.kids.length > 0) {
    let ageVal = profile.age + getKidsAge(profile.kids)
    console.log(ageVal);
  }
}