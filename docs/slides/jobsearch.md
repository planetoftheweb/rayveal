<!-- .slide: data-state="title" -->
# Job Search Protocol

---

## Installing

- Grab it from [repo](http://github.com/planetoftheweb/rayveal)
- Requires server (FTP/Node)
- [https://nodejs.org](NodeJS) (optional)
- grunt serve (http://localhost:800)
- Use docs folder in any project

---

## Simple Slide

This is the simplest slide you could make. It does whatever a [spider can](https://github.com/hakimel/reveal.js). Just some text with a paragraph. All slides are written with markdown. You can add invisible notes for yourself using two &gt;&gt; after a carriage return (<a href="slides/demo.md">see markdown file here</a>)

>> Author Notes: Author notes are similar to markdown blockquotes, but you use double greater than signs. They won't appear on your slides, so I personally use them as reading notes, but Reveal.js has a presentation mode that allows you to see them in your slides.

---

## Persistent Navigation

<small>**Notice:** the persistent navigation bar at the bottom is on every page. To modify, look for the following code (delete it if you don't need it)</small>

```
<footer class="footer">
  <div class="persistent">
    <strong>Slides:</strong> <a href="http://bit.ly/thenext50">bit.ly/thenext50</a> &bull; <strong>Contact:</strong>
    <a href="https://www.linkedin.com/in/planetoftheweb">LinkedIn</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="http://twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="http://github.com/planetoftheweb">github</a>
  </div>
  <div class="smaller">Use arrows to navigate, esc for overview</div>
</footer>
```


>> Author Notes: Author notes are similar to markdown blockquotes, but you use double greater than signs. They won't appear on your slides, so I personally use them as reading notes, but Reveal.js has a presentation mode that allows you to see them in your slides.

---

## Multiple slides

You can use multiple markdown files within the same slide, just add a different slide in the slides folder and [link to it](?d=Bootstrap 4 Cards&). (see [markdown](slides/demo.md) file for how it works)
---

## Sidebar Menu

Press the 'm' key to show [sidebar menu](https://github.com/denehyg/reveal.js-menu). You can use it to jump to different slides. There is also an [index](slides/index.html) file in the slides menu, where you can add links to your different files.

---

## Standalone Folder
Presentations live in a docs folder within the main project, simply upload the docs folder to a server and change the name if you want. It's self contained. It's also easy to add as documentation using Github Pages.

---

## Fragments

1. Are on by default
2. You can write HTML lists
  - if you don't want them

---

  ## Code options

    - bootstrap-like colors for code
    - <code class="code-primary">primary</code> <code class="code-success">success</code> <code class="code-info">info</code> <code class="code-warning">warning</code> <code class="code-danger">danger</code>
    - <a class="tooltip" href="#">`tooltips`<span>for overlay explanations</span></a> on rollover

---

<!-- .slide: data-state="bar" -->

## Sample: Has Bar

- This slide has a blue bar
- Aligns to the top
- &lt;!-- .slide: data-state="bar" --&gt;

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-html5"></i> Has Icon

- Template with an icon
- Preloading [font-awesome](http://fontawesome.io) <small>by Dave Gandy</small>
- &lt;!-- .slide: data-state="hasicon" --&gt;

---

# Background Video

<!-- .slide: data-state="textonvideo" data-background-video="http://planetoftheweb.com/i/fish.mp4" -->

<small>&lt;!-- .slide: data-state="textonvideo" data-background-video="http://planetoftheweb.com/i/fish.mp4" --&gt;</small>

>> Note: You also have the option of creating video as a background using regular reveal.js tags.

---


<!-- .slide: data-state="textonimage" data-background-image="http://planetoftheweb.com/i/bridge.jpg" -->

## Background with an image
And some text, small shadow...

<small>&lt;!-- .slide: data-state="textonimage" data-background-image="http://planetoftheweb.com/i/bridge.jpg" --&gt;</small>

---

## Here's some code

```javascript
var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function() {
  var appWindow;
  appWindow = new BrowserWindow();
  appWindow.loadURL('http://raybo.org');
});
```
<!-- .element: data-trim="true" contenteditable="true" -->

Syntax highlighted, editable by default

---

## Embedded Code
<small>Here's a sample of an embeded CodePen. Use an iframe.</small>

<iframe height='300' scrolling='no' title='Bootstrap 4' src='//codepen.io/planetoftheweb/embed/bgdOzX/?height=300&theme-id=27192&default-tab=html,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/planetoftheweb/pen/bgdOzX/'>Bootstrap 4</a> by Ray Villalobos (<a href='http://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

## Tables

Here's what a table looks like. Use the <a href="http://www.tablesgenerator.com/markdown_tables">tables generator</a> to help you write the markdown.

| |  Extra small <small>< 768px</small> | Small <small> ≥ 768px</small> | Medium <small>≥992px</small> | Large <small>≥1200px</small> |
|---|---|---|---|---|
| **Container**	| Auto | 750px | 970px | 1170px |
| **Size**	| .col-xs- | .col-sm- | .col-md- | .col-lg- |
| **Column width** | Auto | ~62px | ~81px | ~97px |
