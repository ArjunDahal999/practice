/**
   Priomse is 
 */

async function test() {
  try {
    await new Promise((res, rej) => {
      setTimeout(() => {
        rej();
        console.log("Res");
      }, 1000);
    });
    console.log("atbxc");
  } catch (error) {
    console.log("error");
  }
}

test();
