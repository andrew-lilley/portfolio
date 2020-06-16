import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

const IndexPage = () => {
  return (
    <Layout title="Home" description="I am a Full Stack Developer who is interesting in broadening my development knowledge. On this website we explore the training courses that I have undertaken.">
      <h1>Welcome to my website</h1>
      <p>Somehow, you have stumbled across my portfolio website or perhaps I have just supplied the link to you.</p>
      <p>This is a website that I am using to collate the details of all the training courses that I have undertaken whilst on furlough. You can read more by visiting <Link to="/about/">About Me</Link>.</p>
      <p>If you are interested in what I have been upto, you can find out by visiting <Link to="/portfolio/">My Portfolio</Link>.</p>
      <p>I started to do some light training using <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a> but then I moved over to paid for courses on <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">Udemy</a> after being sucked in by a pricing promotion.</p>
      <p>Some technologies and services that I have been exposed to include:</p>
      <ul>
        <li><a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a></li>
        <li><a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a></li>
        <li><a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">GraphQL</a></li>
        <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
        <li><a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel</a></li>
        <li><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a></li>
        <li><a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a></li>
      </ul>
    </Layout>
  )
};

export default IndexPage;
