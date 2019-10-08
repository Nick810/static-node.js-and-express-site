const express = require('express');
const { projects } = require('.././data.json');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  res.render('project',{
    project_name: projects[req.params.id].project_name,
    project_description: projects[req.params.id].description,
    project_technologies: projects[req.params.id].technologies,
    project_liveLinks: projects[req.params.id].live_link,
    project_gitLinks: projects[req.params.id].github_link,
    project_image: projects[req.params.id].image_urls
  });
});

module.exports = router;
