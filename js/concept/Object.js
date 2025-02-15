const obj = {
  key: 1,
  nice: 2,
  done: "adfas",
  // {id:1}:"test"  // cant do this in object but in Map we cana do
};

// returns key and value
Object.entries(obj).map((e) => {
  console.log(e[0]);
});

//returns value for each key present in the object
Object.values(obj).map((e) => {
  console.log(e);
});

// copytong the obj = { ho:2} to exisinting object obj
Object.assign(obj, { ho: 2 });

console.log(obj);
