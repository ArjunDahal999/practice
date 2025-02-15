// clouser refer to child having the access to the scope of parent even after the parent closes .

var i = 1;

function parent() {
  let myPrentValue = 1;
  console.log(myPrentValue);
  function child() {
    myPrentValue += 1;
    i += 2;
    console.log("mpv =" + myPrentValue);
    console.log(" i =" + i);
  }

  return child;
}

const res = parent();
res(); // here clilden have access to the myPresentVal
res();
