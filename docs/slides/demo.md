<!-- .slide: data-state="title" -->

# RayVeal

## Opinionated Reveal.js

A markdown first presentation framework. Based on reveal.js with preinstalled plugins, a dash of Bootstrap and sweet extras.

<<<<<<< HEAD
<a class="btn btn-lg btn-info text-white mr-3" href="https://github.com/planetoftheweb/rayveal">Github Repo</a>

<div class="small mt-4"><span class="badge badge-light mr-1 ml-2">&larr; &rarr;</span> navigate
<span class="badge badge-light mr-1 ml-2">t</span>toolbar
<span class="badge badge-light mr-1 ml-2">m</span>menu
<span class="badge badge-light mr-1 ml-2">esc</span>overview</div>
=======
<a class="btn btn-lg btn-danger text-white mr-3" href="https://github.com/planetoftheweb/rayveal">Github Repo</a>

<div class="small mt-4"><span class="badge badge-warning mr-1 ml-2">&larr; &rarr;</span> navigate
<span class="badge badge-warning mr-1 ml-2">t</span>toolbar
<span class="badge badge-warning mr-1 ml-2">m</span>menu
<span class="badge badge-warning mr-1 ml-2">esc</span>overview</div>
>>>>>>> ba13bac9afcbd04eebd3d3b11016ae5b607409c1

---

<!-- .slide: data-state="title" class="bg-dark text-warning" -->

# Features

---

# 100% Markdown

- Assumes you use markdown to create slides. The `index.html` file points to a markdown file in `build/slides/demo.md`.
- It does whatever [reveal.js](https://github.com/hakimel/reveal.js) can.

---

# Persistent Navigation

<small>The persistent navigation bar at the bottom is on every page. It will disappear after 5 seconds. You can also toggle it by hitting the `t` key. Look for the following code on `index.html`</small>

```html
<footer class="footer">
  <div class="persistent">
    <strong>Slides:</strong>
    <a href="https://bit.ly/thenext50">bit.ly/thenext50</a> &bull;
    <strong>Contact:</strong>
    <a href="https://www.linkedin.com/in/planetoftheweb">LinkedIn</a> |
    <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a>
    | <a href="https://twitter.com/planetoftheweb">@planetoftheweb</a> |
    <a href="https://github.com/planetoftheweb">github</a>
  </div>
  <div class="smaller">Use arrows to navigate, esc for overview</div>
</footer>
```
<<<<<<< HEAD
=======
<!-- data-line-numbers="1-2" -->
>>>>>>> ba13bac9afcbd04eebd3d3b11016ae5b607409c1

---

# Multiple slides

You can use multiple markdown files within the same project, just add a file in the `build/slides` folder.

<small>Press the `m` key to show [sidebar menu](https://github.com/denehyg/reveal.js-menu). You can use it to jump to different slideshows. This list is created using the gulp build process, which generates an `index.json` file for you as you add more markdown files to the `docs/slides` folder.</small>

---

# Author Notes

You can't see them, but they're there. Speaker notes lets you create notes that only you see. Press the `s`. I also use them so that I know what I'm going to say when using simpler bullets.

> > Author Notes: Author notes are similar to markdown blockquotes, but you use double greater than signs. They won't appear on your slides, so I personally use them as reading notes, but Reveal.js has a presentation mode that allows you to see them in your slides.

---

# Fragments

1. Are on by default
1. You can write HTML lists<br><small>(If you don't want them)</small>

---

<<<<<<< HEAD
<!-- .slide: data-state="title" class="bg-dark text-warning" -->
=======
<!-- .slide: data-state="title title-dark" class="bg-dark text-warning" -->
>>>>>>> ba13bac9afcbd04eebd3d3b11016ae5b607409c1

# Templates

---

<!-- .slide: data-state="hasicon" -->

# <i class="fab fa-html5"></i> Has Icon Template

- Template with an icon
- Preloading [font-awesome](https://fontawesome.com) <small>by Dave Gandy</small>
- &lt;!-- .slide: data-state="hasicon" --&gt;

---

<!-- .slide: data-state="circles" -->

# Circles Template

- one
- two
- three
- four
- five
- just list items

&lt;!-- .slide: data-state="circles" --&gt;

---

<!-- .slide: data-state="textonimage" data-background-image="images/photo.jpg" -->

# Background with an image

And some text, small shadow...

<small>&lt;!-- .slide: data-background-image="images/photo.jpg" --&gt;</small>

---

# Background Video

<!-- .slide: data-state="textonvideo" data-background-video="images/video.mp4" -->

<small>&lt;!-- .slide: data-state="textonvideo" data-background-video="images/video.mp4" --&gt;</small>

---

<!-- .slide: data-state="title" class="bg-dark text-warning" -->

# Styles & Customization

---

<!-- .slide: data-state="title" class="bg-info" style="background-color: #563C7C" -->

![pow](images/pow.svg)<!-- .element: style="width:80%" -->

# Customizing<!-- .element: class="text-warning" style="text-shadow: 2px 2px 10px #222" -->

## slides and elements

<small>Add bootstrap classes or style attributes to customize.

Control individual elements using `.element:`.

<small>See how I added an SVG icon and the shadow on the headline?
<a class="btn btn-warning mt-3" href="slides/demo.md">see markdown</a>

</small>

---

# Icon Samples <a class="btn btn-danger btn-lg text-white fab fa-codepen" href="https://codepen.io/planetoftheweb/pen/oJOwYb"></a> <a class="btn btn-primary btn-lg text-white fab fa-linkedin-in" href="https://www.linkedin.com/learning/instructors/ray-villalobos"></a> <a class="btn btn-success btn-lg text-white fab fa-github-alt" href="https://github.com/planetoftheweb"></a>

- Look at the title
- I added some icons from [font-awesome](https://fontawesome.com)

---

# Inline Code Styles

- [Bootstrap](https://getbootstrap.com)-like colors for inline code
- <code class="code-primary">primary</code> <code class="code-success">success</code> <code class="code-info">info</code> <code class="code-warning">warning</code> <code class="code-danger">danger</code>

- <a class="tooltip" href="#">`tooltips`<span>For overlay explanations</span></a> on rollover
- Always content-editable

---

# Inline Code in Lists

Automatically colorize on second level lists<br>

- `sample`
  - NUM: `one` `two` `three`
  - NUM: `four` `five` `six`
  - NUM: `seven` `eight` `nine`
  - NUM: `ten` `eleven` `twelve`
  - NUM: `thirteen` `fourteen` `fifteen`

---

# Here's some code

```javascript
const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

app.on("ready", function() {
  const appWindow;
  appWindow = new BrowserWindow();
  appWindow.loadURL("https://raybo.org");
});
```

<<<<<<< HEAD
<!-- .element: data-trim="true" contenteditable="true" -->

Syntax highlighted, editable by default
=======
<p class="fragment">Syntax highlighted, editable by default</p>
>>>>>>> ba13bac9afcbd04eebd3d3b11016ae5b607409c1

---

# Embedded Code

<small>Here's a sample of an embeded CodePen. Use an iframe.</small>

<iframe height='300' scrolling='no' title='Bootstrap 4' src='//codepen.io/planetoftheweb/embed/bgdOzX/?height=300&theme-id=27192&default-tab=html,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 50vh;'>See the Pen <a href='https://codepen.io/planetoftheweb/pen/bgdOzX/'>Bootstrap 4</a> by Ray Villalobos (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Tables

Here's what a table looks like. Use the <a href="https://www.tablesgenerator.com/markdown_tables">tables generator</a> to help you write the markdown.

|                  | Extra small <small>< 768px</small> | Small <small> ≥ 768px</small> | Medium <small>≥992px</small> | Large <small>≥1200px</small> |
| ---------------- | ---------------------------------- | ----------------------------- | ---------------------------- | ---------------------------- |
| **Container**    | Auto                               | 750px                         | 970px                        | 1170px                       |
| **Size**         | .col-xs-                           | .col-sm-                      | .col-md-                     | .col-lg-                     |
| **Column width** | Auto                               | ~62px                         | ~81px                        | ~97px                        |

---

<!-- .slide: data-state="title" class="bg-dark text-warning" -->

# Bootstrap Support

---

# Bootstrap Cards

<p class="small">Some styles from the [bootstrap framework](https://getbootstrap.com/) can be real useful...like bootstrap cards. Combine them with reveal fragment transitions.</p>

<div class="card-deck mx-5">
<div class="card fragment fade-in-then-semi-out">
  <img src="images/photo.jpg" class="card-img-top img-fluid" alt="Sample Image">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary text-white">Go somewhere</a>
  </div>
</div>
<div class="card fragment fade-in-then-semi-out">
  <img src="images/photo.jpg" class="card-img-top  img-fluid" alt="Sample Image">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary text-white">Go somewhere</a>
  </div>
</div>
<div class="card fragment fade-in-then-semi-out">
  <img src="images/photo.jpg" class="card-img-top  img-fluid" alt="Sample Image">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary text-white">Go somewhere</a>
  </div>
</div>
</div>
---

# Stages of a project

<p class="small">List groups are another nice component you can use.<br>Here's the classic six stages of a project: </p>

<ul class="list-group">
  <li class="list-group-item fragment fade-down"><i class="far fa-smile"></i> Enthusiasm</li>
  <li class="list-group-item fragment fade-down">Disillusionment</li>
  <li class="list-group-item  d-flex justify-content-between align-items-center fragment fade-down">Panic <span class="badge badge-danger badge-pill"><i class="fas fa-star text-white"></i></span>
  </li>
  <li class="list-group-item fragment fade-down">
    Search for the guilty
  </li>
  <li class="list-group-item fragment fade-down">
    Punishment of the innocent
  </li>
  <li class="list-group-item fragment fade-in-then-semi-out">
    Praise for the non-participants
  </li>
</ul>

---

# Alerts

<div class="mx-5">
  <div class="alert alert-danger fragment">
    <h2 class="alert-heading">Danger Will Robinson</h2>
    <hr>
    <p>A few adjustments to other Bootstrap components like alerts, can yield some pretty cool layouts for very little markup.</p>
  </div>

  <div class="alert alert-success fragment">
    <p>The alert contextual colors will also work here, so go nuts with these styles.</p>
  </div>
</div>

---

<!-- .slide: data-state="title" class="bg-dark text-warning" -->

# Installation

---

# Installing

1. Grab/Fork from [repo](http://github.com/planetoftheweb/rayveal)
1. `build` folder has presentation
1. `build/slides/demo.md` subfolder has sample markdown
1. `slides/index.json` has a list of presentations (optional)

---

# Running locally

1. Run `$ npm install` from your terminal
1. Edit `build/slides/demo.md` or add `*.md files`
1. Run `$ npm start` from your terminal
1. Generates the `build/slides/index.json` file (index)
1. Creates a live reload server
