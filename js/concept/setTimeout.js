// setTimeout( function , time ) --> id

function display(s) {
  console.log(s);
}

const id = setTimeout(() => display("Hello"), 1000);

// cleartime is use for stop execution of the function inside the settime out
clearTimeout(id);
