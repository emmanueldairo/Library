const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: 'cupidatat magna in sit',
      genre: 'Science Fiction',
      author: 'Collins Dixon',
      read: true
    },
    {
      title: 'nostrud velit proident ullamco',
      genre: 'Science Fiction',
      author: 'Morrow Melton',
      read: false
    },
    {
      title: 'ullamco Lorem aliquip adipisicing',
      genre: 'Historical Fiction',
      author: 'Rosa Gay',
      read: true
    },
    {
      title: 'ex ex minim tempor',
      genre: 'Science Fiction',
      author: 'Velma Sutton',
      read: false
    },
    {
      title: 'laboris nisi minim in',
      genre: 'Historical Fiction',
      author: 'Jo Meyer',
      read: true
    },
    {
      title: 'nisi aliquip proident eiusmod',
      genre: 'Historical Fiction',
      author: 'Lee Shepard',
      read: false
    },
    {
      title: 'consectetur labore consequat ea',
      genre: 'Historical Fiction',
      author: 'Bertha Williams',
      read: true
    }
  ];

  bookRouter.route('/')
    .get((req, res) => {
      res.render('bookListView', {
        nav,
        title: 'Library',
        books
      });
    });
  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('bookView', {
        nav,
        title: 'Library',
        book: books[id]
      });
    });

  return bookRouter;
}


module.exports = router;
