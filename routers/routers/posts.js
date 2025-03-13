const express = require('express');
const router = express.Router();
const posts = require('../posts');

router.get('/', (req, res) => {
  res.send('Lista dei post');
});

router.get('/:slug', (req, res) => {
  const postSlug = req.params.slug;