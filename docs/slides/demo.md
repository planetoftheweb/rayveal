<!-- .slide: data-state="title"  -->

# RayVeal

## Opinionated Reveal.js

<p>A markdown first presentation framework.<br> Based on reveal.js with preinstalled plugins, a dash of Bootstrap and sweet extras.</p>
<p class="no-fragment btn-group" role="group" aria-label="Basic example">
<a class="btn btn-lg btn-warning text-dark" href="https://github.com/planetoftheweb/rayveal">Github Repo</a>
<a class="btn btn-lg btn-light text-dark" href="https://rayveal.tech">Demo</a>
</p>

<p class="no-fragment small mt-4"><span class="badge bg-light text-dark mr-1 ml-2">&larr; &rarr;</span> navigate
<span class="badge bg-light text-dark mr-1 ml-2">t</span>toolbar
<span class="badge bg-light text-dark mr-1 ml-2">m</span>menu
<span class="badge bg-light text-dark mr-1 ml-2">esc</span>overview</p>

---

<!-- .slide: data-state="title" data-transition="zoom" class="bg-dark"-->

# Features

---

# 100% Markdown

- Assumes you use markdown to create slides. The `index.html` file points to a markdown file in `docs/slides/demo.md`.
- It does whatever [reveal.js](https://github.com/hakimel/reveal.js) can.

---

# Customizable

The persistent navigation bar at the bottom is on every page. It will disappear after 5 seconds. You can also toggle it by hitting the `t` key. Look for the following code on `index.html`

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

---

# Multiple slides

You can use multiple markdown files within the same project, just add a file in the `docs/slides` folder.

<small>Press the `m` key to show [sidebar menu](https://github.com/denehyg/reveal.js-menu). You can _use_ it to jump to different slideshows. This list is created using the gulp build process, which generates an `index.json` file for you as you add more markdown files to the `docs/slides` folder.</small>

---

# Author Notes

You can't see them, but they're there. Speaker notes lets you create notes that only you see. Press the `s` key to view **presenter mode**. I also use them so that I know what I'm going to say when using simpler bullets.

> >

Author notes are similar to markdown blockquotes, but you use double greater than signs. They won't appear on your slides, so I personally use them as reading notes, but Reveal.js has a presentation mode that allows you to see them in your slides.

---

# Fragments

1. Are on by 'default'
1. You can write HTML lists

(If you don't want them)

---

<!-- .slide: data-state="title" class="bg-dark" -->

# Templates

---

<!-- .slide: data-state="hasicon" -->

# <i class="fab fa-html5"></i> Has Icon Template

- Template with an icon
- Preloading [font-awesome](https://fontawesome.com) <small>by Dave Gandy</small>

<small>&lt;!-- .slide: data-state="hasicon" --&gt;</small>

---

<!-- .slide: data-state="circles" -->

# Circles Template

- one
- two
- three
- four
- five
- just list items

<small>&lt;!-- .slide: data-state="circles" --&gt;</small>

---

<!-- .slide: data-state="textonimage" data-background-image="images/photo.jpg" -->

# Background with an image<!-- .element: class="animate__animated animate__backInDown  animate__fast " -->

<p  class="animate__animated animate__backInUp animate__slow">
And some text, small shadow, fancy animation...
</div>

<small class="animate__animated animate__backInUp animate__delay-2s">&lt;!-- .slide: data-background-image="images/photo.jpg" --&gt;</small>

---

<!-- .slide: data-state="mostlyimage" data-background-image="images/photo.jpg" -->

# Mostly Image

<small class="fragment" data-fragment-index="5">&lt;!-- .slide: data-state="mostlyimage" data-background-image="images/photo.jpg" --&gt;
</small>

- Photo takes up 60%
- Title slides from right
- Slightly smaller font

---

# Background Video

<!-- .slide: data-state="textonvideo" data-background-video="images/video.mp4" -->

<small>&lt;!-- .slide: data-state="textonvideo" </small>data-background-video="images/video.mp4" --&gt;

---

<!-- .slide: data-state="title" class="bg-dark" -->

# Style Samples

---

# Using Icons <a class="btn btn-danger btn-lg text-white fab fa-codepen" href="https://codepen.io/planetoftheweb/pen/oJOwYb"></a> <a class="btn btn-primary btn-lg text-white fab fa-linkedin-in" href="https://www.linkedin.com/learning/instructors/ray-villalobos"></a> <a class="btn btn-success btn-lg text-white fab fa-github-alt" href="https://github.com/planetoftheweb"></a>

- Look at the title
- I added some icons from [font-awesome](https://fontawesome.com)

---

<!-- .slide: data-state="hasquote" class="bg-dark" -->

<blockquote class="animate__animated animate__backInDown">
 <i class="fa fa-quote-left text-secondary " aria-hidden="true"></i>
Amazingly few<br>
discotheques provide<br>
jukeboxes
 <i class="fa fa-quote-right text-secondary" aria-hidden="true"></i> 
  <footer class="fragment text-secondary">--Animate with <a href="https://animate.style/" class="text-warning">animate.style</a></footer>
</blockquote>

<small>&lt;!-- .slide: data-state="hasquote" class="bg-dark" --&gt;</small>

---

# Inline Color Styles</small>

- [Bootstrap](https://getbootstrap.com)-like colors for bg, text, buttons, code
- Code: `default` <code class="code-primary">primary</code> <code class="code-success">success</code> <code class="code-info">info</code><br> <code class="code-warning">warning</code> <code class="code-danger">danger</code> <code class="code-royal">royal</code> <code class="code-exciting">exciting</code><br>editable
- <a class="tooltip" href="#">`tooltips`<span>Overlay explanations, clickable</span></a> available on rollover

---

<!-- .slide: data-state="layout-codelist" -->

# Inline Code in Lists

Automatically colorize on second level lists

- `sample`
  - NUM: `one` `two` `three`
  - NUM: `four` `five` `six`
  - NUM: `seven` `eight` `nine`
  - NUM: `ten` `eleven` `twelve`
  - NUM: `thirteen` `fourteen` `fifteen`

---

# Here's some code

```js [1|5-7]
const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

app.on("ready", function() {
  const appWindow;
  appWindow = new BrowserWindow();
  appWindow.loadURL("https://raybo.org");
});
```

- Colorized with [highlight.js](https://highlightjs.org/), editable by default
- Language, line numbers, animation `js [1|5-7]`

---

# Embedded Code

Here's a sample of an embeded CodePen. Use an iframe. The iframe can take up the full screen (sample on next page).

<iframe height='300' scrolling='no' title='Bootstrap 4' data-src='//codepen.io/planetoftheweb/embed/bgdOzX/?height=300&theme-id=27192&default-tab=html,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 50vh;'>See the Pen <a href='https://codepen.io/planetoftheweb/pen/bgdOzX/'>Bootstrap 4</a> by Ray Villalobos (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

> > You can also use a full screen iframe. If you make it optionally interactive, it's hard for it to lose focus (like making the above codepen editable), so use with care. Here's the special code for that.

`.slide: data-background-iframe="" data-background-interactive="true"`

---

# Tables

Here's what a table looks like.<br>Use the <a href="https://www.tablesgenerator.com/markdown_tables">tables generator</a> to help you write the markdown.

|                  | Extra small <small>< 768px</small> | Small <small> &ge; 768px</small> | Medium <small>&ge; 992px</small> | Large <small>&ge; 1200px</small> |
| ---------------- | ---------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| **Container**    | Auto                               | 750px                            | 970px                            | 1170px                           |
| **Size**         | .col-xs-                           | .col-sm-                         | .col-md-                         | .col-lg-                         |
| **Column width** | Auto                               | ~62px                            | ~81px                            | ~97px                            |

---

# Wait, What? Charts?

You can also add [chart.js](https://www.chartjs.org/) charts using this [fantastic plugin](https://github.com/rajgoel/reveal.js-plugins).

<canvas data-chart="bar">
<!--
{
 "data": {
  "labels": ["Jan"," Feb"," Mar"," Apr"," May"," Jun"," Jul"],
  "datasets": [
   {
    "data":[32,42,18,23,39,73,36],
    "label":"My first dataset","backgroundColor":"rgba(20,220,220,.8)"
   }
  ]
 },
 "options": { "responsive": "false" }
}
-->
</canvas>

---

<!-- .slide: data-state="title" class="bg-dark" -->

# Bootstrap Components

---

# Bootstrap Cards

Use cards with reveal fragment and fragment animation classes.

<div class="card-group mx-5">
<div class="card fragment fade-in-then-semi-out" style="width: 18em">
  <img data-src="images/photo.jpg" class="card-img-top img-fluid" alt="Sample Image">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary mt-2 text-white">Go somewhere</a>
  </div>
</div>
<div class="card fragment fade-in-then-semi-out" style="width: 18em">
  <img data-src="images/photo.jpg" class="card-img-top  img-fluid" alt="Sample Image">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary mt-2 text-white">Go somewhere</a>
  </div>
</div>
<div class="card fragment fade-in-then-semi-out" style="width: 18em">
  <img data-src="images/photo.jpg" class="card-img-top  img-fluid" alt="Sample Image">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary mt-2 text-white">Go somewhere</a>
  </div>
</div>
</div>
---

# Stages of a project

List groups are another nice component.<br>Why not use [emojis](https://github.com/SebastianAigner/twemoji-amazing) (search [here](https://emojipedia.org/))

<!-- .element class="fragment" style="font-size: .8em" -->

<ul class="list-group">
  <li class="list-group-item fragment fade-right">
  <i class="twa twa-beaming-face-with-smiling-eyes"></i>  Enthusiasm</li>
  <li class="list-group-item fragment fade-right">
  <i class="twa twa-disappointed-face"></i> Disillusionment</li>
  <li class="list-group-item fragment fade-right">
  <i class="twa twa-face-screaming-in-fear"></i> Panic</li>
  <li class="list-group-item fragment fade-right">
    <i class="twa twa-pensive-face"></i> Search for the guilty
  </li>
  <li class="list-group-item fragment fade-right">
    <i class="twa twa-pleading-face"></i> Punishment of the innocent
  </li>
  <li class="list-group-item fragment fade-in-then-semi-out">
    <i class="twa twa-raising-hands"></i> Praise for the non-participants
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

<!-- .slide: data-state="title" class="bg-dark" -->

# Installation

---

# Installing

1. Grab/Fork from [repo](http://github.com/planetoftheweb/rayveal)
1. `docs` folder has presentation
1. `docs/slides/demo.md` subfolder has sample markdown
1. `slides/index.json` has a list of presentations (optional)

---

# Running locally

1. Run `$ npm install` from your terminal
1. Edit `docs/slides/demo.md` or add `*.md files`
1. Run `$ npm start` from your terminal
1. Generates the `docs/slides/index.json` file (index)
1. Creates a live reload server

```

```
