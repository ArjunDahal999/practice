/**
 
 JavaScript program is loaded into the engine, it is initially converted into an Abstract Syntax Tree (AST). 

 Once the AST is generated, JavaScript can be handled in two ways, depending on the engine:

        a)Interpretation: The engine reads and executes the JavaScript code directly, one instruction at a time, without converting it to machine code beforehand. This process is slower because the code is interpreted every time it's run.

        b)Compilation: Modern JavaScript engines use a technique called Just-In-Time (JIT) Compilation, where parts of the JavaScript code are compiled into machine code at runtime, just before they are executed. The code is not compiled all at once but rather as needed.   

            JIT
                JIT Compilation Process:
                  
                    Bytecode Generation: The engine first compiles the JavaScript code into bytecode. Bytecode is a lower-level representation of the code, which is more efficient for execution by the engine than raw JavaScript. It’s an intermediate step before machine code.

                    Optimization: The engine can perform optimizations based on how the code is being used. For example, if the engine detects that certain functions or code paths are executed frequently, it may apply optimizations such as inlining, dead code elimination, or loop unrolling.

                    Machine Code Generation: After analyzing and optimizing the bytecode, the engine can convert it into machine code, which is the low-level code that the CPU understands. The machine code is executed by the CPU.
 */
