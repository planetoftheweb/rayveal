<!-- .slide: data-state="title" -->
# RayVeal
<small>Easy Markdown Slides</small>

---

## What is Rayveal.js?

- Copy of [reveal.js](https://github.com/hakimel/reveal.js)

- Easy to fork

- 100% Markdown

- Adds features/plugins/styles


>> Author Notes:

- Rayveal is essentially a copy of the reveal.js framework. It's really a set of customizations on top of reveal.js that makes it easier to create slides using markdown.

- It's super easy to fork a copy from github to get started quickly.

- Although you can use it with HTML just like you can with reveal.js, it's meant to be used with markdown, a simple language that makes it much easier to create slides.

- It adds features like a slidein toolbar at the bottom of your slides, which you can toggle by pressing t. It also adds a plugin that provides a sidebar menu, where you can switch between multiple slides. 

---

<!-- .slide: data-state="title" -->
# Quickstart

>> Author Notes:
- Let's take a look at how easy it is to create your own slideshow. You'll need your own github account, but once you've got that, you can fork the [rayveal](https://github.com/planetoftheweb/rayveal) repo.
- Next, you'll need to set up your fork to publish to the web. To do that, you can go into settings tab and look under the Github Pages section. The default repo is set up to use the docs folder, so choose that and then choose a theme.
- Once you do that, you'll have a web accessible URL to the presentation demo, let's click on that to see the demo. It's designed to be self documenting so you can read about the features. To show the toolbar hit t, to change to a different presentation hit the m key and then choose a document.

---
<!-- .slide: data-state="title" -->
# Editing

>> Author Notes:
- Editing is really easy and you can use the github tools to create a slide. Go to the docs/slides folder and choose the demo project. You'll see the markdown preview that Github givesyou. Slides can have author notes that don't display in the slides by using double greater than sign.
- Let's go ahead and make a simple edit to our demo. We'll hit the pencil tool and thend edit our title.
- Now we can reload the slide in our browser and you should see the update. I like to create slides by starting with a copy of the markdown text and creating a new file.
- There's a special file `/docs/slides/index.txt` with the filenames that you want to show in the slideout menu. Edit that to control which documents show up on the sidbar list.
- There's one more thing you probably want to update and that's the toolbar HTML. There's a comment that marks it clearly.
```
<footer class="footer fadein">
  <div class="persistent">
    <strong>Links:</strong> <a href="http://raybo.org/masteringcode">Slides</a> | <a href="http://github.com/planetoftheweb/masteringcode">Repo</a> | <strong>Contact:</strong>
    <a href="https://www.linkedin.com/in/planetoftheweb">LinkedIn</a>, <a href="http://twitter.com/planetoftheweb">@planetoftheweb</a>, <a href="http://github.com/planetoftheweb">Github</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">Courses</a>
  </div>
  <div class="small"><strong>&larr; &rarr;</strong>-navigate <strong>t</strong>-toolbar <strong>m</strong>-menu <strong>esc</strong>-overview</div>
</footer>
```
- Let's change the link to the slides. Usualy I create a shortcut link so that while people are watching the presentation, they can see where they can get the slides.
```
<a href="http://raybo.org/masteringcode">Slides</a>
```
- By default the slides will show the demo.md file, if you want to change that, you can change the  code in the index.html file as well. 
```
<section data-markdown="slides/demo.md" data-separator="\n---\n" data-separator-notes=">>">
```
