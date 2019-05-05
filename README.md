# RayVeal

Rayveal is an opinionated version of the awesome [reveal.js](https://github.com/hakimel/reveal.js/). The main difference is the approach to creating slides and the pre-installation of additional plugins that make it easier to create your presentations.

- [Demo](https://rayveal.tech)

[![Watch the video](http://img.youtube.com/vi/S53U5x_4tBM/0.jpg)](http://youtu.be/S53U5x_4tBM)

## Includes

I pre-install some libraries to make it easier for you to create your presentations. Things like Font Awesome will let you easily add icons to your presentation, while a lightweight version of bootstrap lets you use things like button, table and form styles if you need them. You can customize what's included with an npm command.

- [Font Awesome](https://fontawesome.com/?from=io)
- [Lightweight Bootstrap](https://getbootstrap.com)

## Pre-installed plugins

-

The lightweight version of bootstrap

## Installation

Pretty much like installing RevealJS.

```sh
$ git clone this repository
$ npm install
```

The `docs` folder has everything you'd need to upload to a server to get the slideshow working.

The slide content is in the `slides` folder in markdown format. You can add as many markdown files as you want. There are custom styles for tables, code, etc.

## Preview slides locally

When you're ready to preview the slides

```sh
$ grunt serve
```
