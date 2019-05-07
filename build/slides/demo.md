<!-- .slide: data-state="title" -->

# RayVeal

## Opinionated Reveal.js

A markdown first presentation framework. Based on reveal.js with preinstalled plugins, a dash of Bootstrap and sweet extras.

<a class="btn btn-lg btn-info text-white mr-3" href="https://github.com/planetoftheweb/rayveal">Github Repo</a>

<div class="small mt-4"><span class="badge badge-light mr-1 ml-2">&larr; &rarr;</span> navigate
<span class="badge badge-light mr-1 ml-2">t</span>toolbar
<span class="badge badge-light mr-1 ml-2">m</span>menu
<span class="badge badge-light mr-1 ml-2">esc</span>overview</div>

---

# 100% Markdown

- Rayveal assumes you want to use markdown to create slides. The `index.html` file points to a markdown file in `builds/slides/demo.md`.
- It does whatever [reveal.js can](https://github.com/hakimel/reveal.js) can. You can add invisible notes for yourself using two &gt; &gt; after a carriage return (<a href="slides/demo.md">see markdown file</a>)

---

# Persistent Navigation

<small>**Notice:** the persistent navigation bar at the bottom is on every page. It will disappear after 5 seconds. You can also toggle it by hitting the `t` key. To modify, look for the following code (delete it if you don't need it)</small>

```html
<footer class="footer">
  <div class="persistent">
    <strong>Slides:</strong>
    <a href="http://bit.ly/thenext50">bit.ly/thenext50</a> &bull;
    <strong>Contact:</strong>
    <a href="https://www.linkedin.com/in/planetoftheweb">LinkedIn</a> |
    <a href="https://www.linkedin.com/learning/instructors/ray-villalobos"
      >courses</a
    >
    | <a href="http://twitter.com/planetoftheweb">@planetoftheweb</a> |
    <a href="http://github.com/planetoftheweb">github</a>
  </div>
  <div class="smaller">Use arrows to navigate, esc for overview</div>
</footer>
```

---

# Multiple slides

You can use multiple markdown files within the same slide, just add a different slide in the slides folder and [link to it](?d=Bootstrap 4 Cards&). (see [markdown](slides/demo.md) file for how it works)

---

# Sidebar Menu

Press the `m` key to show [sidebar menu](https://github.com/denehyg/reveal.js-menu). You can use it to jump to different slideshows. This list is fed by the gulp process, which generates an `index.json` file for you as you add more markdown files to the `builds/slides` folder.

---

# Author Notes

You can't see them, but they're there. Speaker notes lets you create notes that only you see. Press the `s`. I also use them so that I know what I'm going to say when using simpler bullets.

> > Author Notes: Author notes are similar to markdown blockquotes, but you use double greater than signs. They won't appear on your slides, so I personally use them as reading notes, but Reveal.js has a presentation mode that allows you to see them in your slides.

---

# Fragments

1. Are on by default
2. You can write HTML lists

- If you don't want them

---

# Bootstrap Cards

<p class="small">Some styles from the [bootstrap framework](https://getbootstrap.com/) can be real useful...like bootstrap cards. Combine them with reveal fragment transitions.</p>

<div class="card-deck mx-5">
<div class="card fragment fade-in-then-semi-out">
  <img src="http://planetoftheweb.com/i/photo.jpg" class="card-img-top img-fluid" alt="Sample Image">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary text-white">Go somewhere</a>
  </div>
</div>
<div class="card fragment fade-in-then-semi-out">
  <img src="http://planetoftheweb.com/i/photo.jpg" class="card-img-top  img-fluid" alt="Sample Image">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary text-white">Go somewhere</a>
  </div>
</div>
<div class="card fragment fade-in-then-semi-out">
  <img src="http://planetoftheweb.com/i/photo.jpg" class="card-img-top  img-fluid" alt="Sample Image">
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

# Code options

- [Bootstrap](http://getbootstrap.com)-like colors for code
- <code class="code-primary">primary</code> <code class="code-success">success</code> <code class="code-info">info</code> <code class="code-warning">warning</code> <code class="code-danger">danger</code>

- <a class="tooltip" href="#">`tooltips`<span>For overlay explanations</span></a> on rollover

---

# List Samples

- `sample`
  - NUM: `one` `two` `three`
  - NUM: `four` `five` `six`
  - NUM: `seven` `eight` `nine`
  - NUM: `ten` `eleven` `twelve`
  - NUM:<br>
    `thirteen` `fourteen` `fifteen`

---

<!-- .slide: data-state="hasicon" -->

# <i class="fab fa-html5"></i> Has Icon

- Template with an icon
- Preloading [font-awesome](http://fontawesome.io) <small>by Dave Gandy</small>
- &lt;!-- .slide: data-state="hasicon" --&gt;

---

# Background Video

<!-- .slide: data-state="textonvideo" data-background-video="http://planetoftheweb.com/i/video.mp4" -->

<small>&lt;!-- .slide: data-state="textonvideo" data-background-video="http://planetoftheweb.com/i/video.mp4" --&gt;</small>

> > Note: You also have the option of creating video as a background using regular reveal.js tags.

---

<!-- .slide: data-state="textonimage" data-background-image="http://planetoftheweb.com/i/photo.jpg" -->

# Background with an image

And some text, small shadow...

<small>&lt;!-- .slide: data-background-image="https://lil-cdn.com/585273/computing-apps-threequarter-211095871.jpg" --&gt;</small>

---

# Here's some code

```javascript
const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

app.on("ready", function() {
  const appWindow;
  appWindow = new BrowserWindow();
  appWindow.loadURL("http://raybo.org");
});
```

<!-- .element: data-trim="true" contenteditable="true" -->

Syntax highlighted, editable by default

---

# Embedded Code

<small>Here's a sample of an embeded CodePen. Use an iframe.</small>

<iframe height='300' scrolling='no' title='Bootstrap 4' src='//codepen.io/planetoftheweb/embed/bgdOzX/?height=300&theme-id=27192&default-tab=html,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 50vh;'>See the Pen <a href='http://codepen.io/planetoftheweb/pen/bgdOzX/'>Bootstrap 4</a> by Ray Villalobos (<a href='http://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

# Tables

Here's what a table looks like. Use the <a href="http://www.tablesgenerator.com/markdown_tables">tables generator</a> to help you write the markdown.

|                  | Extra small <small>< 768px</small> | Small <small> ≥ 768px</small> | Medium <small>≥992px</small> | Large <small>≥1200px</small> |
| ---------------- | ---------------------------------- | ----------------------------- | ---------------------------- | ---------------------------- |
| **Container**    | Auto                               | 750px                         | 970px                        | 1170px                       |
| **Size**         | .col-xs-                           | .col-sm-                      | .col-md-                     | .col-lg-                     |
| **Column width** | Auto                               | ~62px                         | ~81px                        | ~97px                        |

---

<!-- .slide: data-state="circles" -->

# Circles

- one
- two
- three
- four
- five
- just list items

&lt;!-- .slide: data-state="circles" --&gt;

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
