/**
-->Node.js runs on one thread for handling requests and executing JavaScript code.

-->While Node.js itself runs on a single thread, it can handle multiple I/O operations concurrently, thanks to its non-blocking, asynchronous nature.


Here’s how it works:

-->Event Loop: The event loop is a core part of Node.js. It listens for events and, when an event (like an I/O operation) is triggered, Node.js performs it asynchronously, without blocking the thread.


-->The asynchronous nature in programming, especially in JavaScript, refers to the ability to execute tasks independently of the main program flow, allowing the program to continue executing without waiting for certain tasks (often I/O operations) to finish.


-->Non-blocking I/O: Node.js doesn't wait for I/O operations (such as reading files or making network requests) to finish before it moves on to the next task. Instead, it delegates these operations to the system or worker threads (under the hood) and moves on. When the I/O operation finishes, the event loop picks it up and executes the callback function associated with that task.


-->Worker threads allow you to run code in separate threads, so they can process heavy computations in the background without blocking the main thread.
Each worker thread runs in its own event loop, which is isolated from the main thread and other workers.
Each thread has its own execution stack and program counter (which keeps track of where it is in the execution of its instructions).


 */

console.log("Start");

setTimeout(() => {
  console.log("This happens after 2 seconds");
}, 2000);

console.log("End");

// Start
// End
// This happens after 2 seconds
