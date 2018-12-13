![cf](http://i.imgur.com/7v5ASc8.png) Context and Hooks
=======================================================

## Learning Objectives

**Students will be able to ...**

* Authenticate using "Basic Auth" (username+password)
* Authenticate using a "Bearer Token"
* Store a login token or cookie for re-use
  * i.e. 'keep me logged in'
* Log Out
* Hide and Show components, links, pages based on authenticated status

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## Computer Science Concept:
* General Web Security

## Main Topic:
Building a create account / login system for a front-end application

What problems do we need to solve for?
* Is the person currently logged in?
  * Which parts of our application care about this?
  * How can we determine this?
* Do we use our own login system or offload that with OAuth (or both?)
* How do we maintain our Bearer Token?
  * Do we persist it? (and are we permitted to?)
  * Do we need to refresh it?
* How do we pass this down or make it available to other components?
  * Redux?
  * Context!

### Proposal
`<Login />` component

Based on your logged in status, it either gives you access to a login process or a log out process through exposing action methods and state

Maintains your status using a cookie

Is able to make your token available to the application via Reducer
