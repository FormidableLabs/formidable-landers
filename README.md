# Formidable Landers

Welcome to the HQ of maintaining our visible Formidable projects!

[Visit the Wiki](https://github.com/FormidableLabs/formidable-landers/wiki)

## Quick Start

We use `yarn`, so make sure to have a current version installed, then install
this project.

```sh
$ npm install -g yarn

$ yarn install
```

Demo the header and footer components by running:

```sh
$ yarn demo
```

and visit [http://localhost:5678/](http://localhost:5678/).

## Develop

### Quality checks

The usual:

```sh
$ yarn run lint
$ yarn run test

# ... or all together ...
$ yarn run check
```

### Kicking the Tires

Before publishing, if you want to test the changes you’ve made to
`formidable-landers`, you can build what you have and use `npm link` in the repo
where you want to see teh changes.

In `formidable-landers`, run:

```sh
$ yarn build
```

then run:

```sh
$ npm link
```

Then, in a repo you want to test, such as `formidable.com`, run:

```sh
$ npm link formidable-landers
```

and you should see your changes! 🎉

If `npm link` is being futzy or giving you problems, take a look at
[`lank`](https://github.com/FormidableLabs/lank) which requires a bit more
learning curve and setup, but produces a far more manageable and reliable
way of working with multiple dependent repos at the same time.

## Publish

When publishing, please make sure to install and use `npm@5.6.0` to preserve
file timestamp metadata as it is required for our overall website build and
versions subsequent to `5.6.0` intentionally destroy this metadata:

```sh
$ npm install -g npm@5.6.0
$ npm --version
5.6.0
```

1.  Merge your PR into `master`.
2.  Add a new version
    ```sh
    $ npm version major|minor|patch -m "Version %s - INSERT_REASONS"
    ```
3.  Publish
    ```sh
    $ npm publish
    ```
4.  Push commit with tags
    ```sh
    $ git push && git push --tags
    ```

[![Made with love by Formidable](https://formidable.surge.sh/assets/readme-foots.svg)](http://formidable.com/?utm_source=github&utm_medium=OSS&utm_campaign=repository)
