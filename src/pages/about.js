import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

const AboutPage = () => {
  return (
    <Layout title="About Me" description="I am a Full Stack Developer who is interesting in broadening my development knowledge. On this website we explore the training courses that I have undertaken.">
      <h1>About Me</h1>
      <p>I am a Full Stack Developer who is interesting in broadening my development knowledge. I have been a Developer for over 15 years. However, in all that time, I have not made a website for myself. Now I have some time.</p>
      <p>In late April, 2020, I was informed that I would be furloughed as part of the <a href="https://www.gov.uk/guidance/claim-for-wages-through-the-coronavirus-job-retention-scheme" target="_blank" rel="noopener noreferrer">Coronavirus Job Retention Scheme</a>. This allows a company to claim a percentage of a salary which they then use to pay their employee. However, a condition of the scheme is that you cannot do any work for that company.</p>
      <h2>What to do whilst on Furlough?</h2>
      <p>For me the simple answer is training courses. For quite some time now, I have been developing in Drupal and associated tech. Furthermore, the majority of that work has been in sub Drupal 8 versions. <a href="https://www.drupal.org/about/in-the-news/blog/drupal-launches-newest-version-of-the-cms-already-powering-top-organizations" target="_blank" rel="noopener noreferrer">Drupal 9</a> has now been released. Therefore, this is a great opportunity to up skill. I have decided to create this website to document my journey as I try out different training courses and gain new skills.</p>
      <p>At Drupalcon Amsterdam 2019, I went to a presentation by the Gatsby Team. I was intrigued by the offering. Therefore, that seemed like a good place to start my journey. I have built this website using Gatsby as a way of learning about it with the help of <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM" target="_blank" rel="noopener noreferrer">Gatsby JS - The Great Gatsby Bootcamp</a> on YouTube.</p>
      <p>Since beginning this journey, I have moved on to doing React courses. I also now have a backlog of courses to tackle. I have courses lined up for GraphQL, Typescript, Node.js and Deno. My thoughts and links to the demo applications are all available on my <Link to="/portfolio/">training portfolio</Link>.</p>
      <p>If you would like to reach out to me or would like to know some more, you can visit my <a href="https://www.linkedin.com/in/andrew-lilley-28297549/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>.</p>
    </Layout>
  )
};

export default AboutPage;
