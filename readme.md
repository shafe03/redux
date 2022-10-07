# Reduxt

    - redux is a state management library for javascript application.
    - In complex app different component state is hard to maintain.
    - redux solve following problems - how/why/when/where?
    - centralizes application state
    - make data flow tranparent and predictable
    - redux is build on top of functional programming principles

# LogRocket: Modern Frontend Monitoring and Product Analytics

# redux pros and cons

    - pros
        -predictable state changes
        -centralized state
        -easy debugging
        -preserve page state
        -redu/undo

    - cons
        -complexity (functional programming)
        -verbosity

# function is javascript is first class citizen

- assign as variable
- pass as an argument
- return from other function
- some example of higher order function are map(), setTimeOut()

# pure function

- same argument = same result

  - no random values
  - no current date
  - no global state
  - no mutation of paramiters, db, etc

- not everything have to be pure
- reducer is a pure function in redux

* benifit of pure function

- self documented
- easily testable
- concurrency
- catchable

# immutablity

- javascript is not a pure functional language
- why immutability?
  - predictability
  - faster change detection

* pros of immutability

- predictablity
- faster change detection
- concurrency

# immutable.js immer.js and mori are libraries for immutablity

# redux fundamentals

- action -> store -> reducer
- action is like events (dispatch)
- reducer is like events handler

* steps
  - Design the store
  - define actions
  - create reducer
  - setup the store
