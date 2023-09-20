import React from 'react';
import PropTypes from 'prop-types';
import { createRoot } from 'react-dom/client';

function Button({ link }) {
  return <a href={link}>Find out more</a>;
}

Button.propTypes = {
  link: PropTypes.string,
}

function CardHeader({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}

CardHeader.propTypes = {
  image: PropTypes.string,
  category: PropTypes.string,
}

function CardBody({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

CardBody.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
}

function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
}

function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

function News() {
  // data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ];

  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {someNews.map(news => (
        <Card {...news} key={news.title} />
      ))}
    </div>
  );
}

const element = document.getElementById('root');
const root = createRoot(element);
root.render(<News />);
