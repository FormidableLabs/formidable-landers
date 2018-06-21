# Formidable Landers

Welcome to the HQ of maintaining our visible Formidable projects!

[Visit the Wiki](https://github.com/FormidableLabs/formidable-landers/wiki)

## Quick Start

```sh
  npm install
```

Demo the header and footer components by running:

```sh
  npm run demo
```

and visit [http://localhost:5678/](http://localhost:5678/).

## Develop

Before publishing, if you want to test the changes you’ve made to `formidable-landers`, you can build what you have and use `npm link` in the repo where you want to see teh changes.

In `formidable-landers`, run:

```sh
  npm run build
```

then run:

```sh
  npm link
```

Then, in a repo you want to test, such as `formidable.com`, run:

```sh
  npm link formidable-landers
```

and you should see your changes! 🎉

## Publish

1.  Merge your PR into `master`.

2.  Add a new version


```sh
npm version major|minor|patch -m "Version %s - INSERT_REASONS"
```

3.  Publish


```sh
npm publish
```

4.  Push commit with tags


```sh
git push origin master --tags
```

[![Made with love by Formidable](https://formidable.surge.sh/assets/readme-foots.svg)](http://formidable.com/?utm_source=github&utm_medium=OSS&utm_campaign=repository)
