---
title: "The Complete React Developer Course - CRXN Clothing"
date: "2020-07-16"
---

## What is this?

The CRXN Clothing app is the principle app of the Andrei Neagoie and Yihua Zhang Udemy course, [Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/).

In the preview video there is a really big sell on this training course. By the end, you will have a fully functional complete e-commerce website that would have otherwise had taken many months to build.

## Topics covered

There are so many topics covered in this course. The course is mainly led by Yihua Zhang and he has a slightly different approach to the file directory structure and file naming conventions than what I was previously seeing in [The Complete React Developer Course (w/ Hooks and Redux)](https://www.udemy.com/course/react-2nd-edition/) but that was fine. 

The course covers the following:

* React Router and Routing
* Component building such as how to break up a design into components
* [Firebase](https://firebase.google.com/) with Firestore data storage and user authentication
* Redux including [reselect](https://github.com/reduxjs/reselect) / Memoization
* A deployment to [Heroku](https://www.heroku.com/)
* A payment integration with [Stripe](https://stripe.com/)
* CSS in JS using [styled components](https://styled-components.com/)
* HOC Patterns
* Asynchronous Redux using [redux-thunk](https://github.com/reduxjs/redux-thunk) and [redux-saga](https://redux-saga.js.org/)
* [React hooks](https://reactjs.org/docs/hooks-intro.html)
* [Context API](https://reactjs.org/docs/context.html)
* [GraphQL](https://www.graphql.com/) / [Apollo](https://www.apollographql.com/)
* Performance improvement such as [code splitting](https://reactjs.org/docs/code-splitting.html) with lazy and suspense
* Progressive Web App
* Testing with [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/)

## Teaching

The teaching style for this course led by Yihua Zhang was akin to pair programming. There were no delegated tasks to do until the bonus sections. You watched and coded along. As this was not my first React course, this was absolutely fine for me.

## My thoughts

As this was more like pair programming, I have felt more like I was at work than doing a training course. As such, I started to notice things such as the Stripe integration being out of date, a lot of e-commerce functionality is actually missing (clothes and trainers without size and colour options). The UX probably requires some improvements too.

I think that you have to accept the website for what it is, it is a demonstration website to illustrate that you have understood and employed the basic, and many advanced, concepts of React and Redux to create a functional website.

I was quite pleased that there were several refactoring session along the way. For example, redux-thunk to redux-saga and implement hooks after completing the tasks using classes first. This allowed me to experience how these features could be introduced into an existing application.

The website actually feels fast and at a quick glance it looks quite impressive.

## Extras

I have felt like making additions as the course has progressed. Perhaps it is because the end product is more aligned to what I do from day to day in my job? So far I have added an order complete page and a currency selector. I have also leveraged the currency selector to display different price formatting. The course just used a static $ in each instance. I have moved it all to a separate component. This has helped me to feel like I was doing more than just a training course. I did consider upgrading the Stripe integration but it does not really fit with what I am doing. I have done payment integrations before and I have a growing list of training courses that I want to do.

As I progressed through the bonus sections, I was also intrigued by the Progressive Web App section. I started to look into how data could be [accessed offline](https://firebase.google.com/docs/firestore/manage-data/enable-offline) with [Firebase](https://firebase.google.com/) and now everything works up to the cart / checkout page even when offline as long as you have visited the website before. 

## Certificate of Completion

![Certificate of Completion](./certificate.jpg)

##Useful Links

* **CRXN Clothing App:** https://react-portfolio-crxn-clothing.herokuapp.com/
*As this is hosted on a free plan at [Heroku](https://www.heroku.com/), the app goes into hibernation when it is not in use. As such it might take some time to initially load.*

* **Github:** https://github.com/andrew-lilley/crxn-clothing

* **Training Course:** https://www.udemy.com/course/complete-react-developer-zero-to-mastery/
