---
title: "What Happens In The Behind-The-Scenes in Javascript?"
date: "August 30 2021"
cover_image: /images/posts/gears.png
---

<style>
    .image__container{
        display:flex;
        justify-content:center;
        margin:5rem 0;
    }
</style>

in Programming lanugages, a lot of the complexity we never touch get abstracted away, this leads to us not needing to know as much which can be useful, but sometimes knowing what happens behind the scenes can help with why there are problems with your code

In Javascript, the execution context is one of those things. its so essential to our everyday lives as js developers and yet most of us don't know about it.

at all times, theres always at least one execution context, the first and last one is called the global execution context. execution context can alse be created with calling functions

there is two phrases within an execution context: the creation phrase and the execution phrase. the creation phrase is where most of the stuff we don't know about happens

in the creation phrase, the following happens:

1. the global object is created (we know this as the "this" keyword)
2. the outer environment is create
3. Its sets up space for variables and functions

the js engine decides the global object of the global execution context (the base execution context)
if its being run on the browser, the execution context "this", is the window.
if its the server "this" is the module itself.

the second phrase is the execution phrase and this where your code is being run. interpreting it, converting it, compiling it, executing it.

Each function call creates its own execution context with its own variable environment, this object and outer environment.

each execution context will be placed on top of whats called an execution stack. the execution context that is on the top of the stack will always be the one which code is being run. when all the code is run the execution context is popped of, then the context below now gets run

<div class="image__container">
    <img src="/images/posts/execution__stack.png" width=600 alt="code example" />
</div>

take this code, the first execution context is created when the program starts and then when the functions are called, it places a context on top of it. once all the code is run it gets popped of and runs the next execution context below
