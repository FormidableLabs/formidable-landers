# Formidable Landers

Welcome to the HQ of maintaining our visible Formidable projects. Our issues capture the planning process for their landing pages.

Our goal is consistent branding and wording across all of our visible projects. For example, they should all have the same header and footer.

## Install and Usage

Add `formidable-landers` as a dependency.
```
npm install formidable-landers --save
```

Import the desired components and any variables/settings if available.
```jsx
import { Header, Footer } from "formidable-landers";
```
```jsx
import { VictorySettings, VictoryTheme, Header, Footer } from "formidable-landers";
```

Both the `<Header />` and `<Footer />` components can be dropped in as is or be customized. The default background colors are sandy, so I recommend adding a `backgroundColor` prop at minimum.
```jsx
<Header backgroundColor="#242121" />
<Footer backgroundColor="#242121" />
```

All the available customizations:
```jsx
<Header
  backgroundColor={VictorySettings.palestSand}
  styleOverrides={{
    display: "block"
  }}
  linkStyles={{
    color: "#c43a31",
    ":hover": {
      color: "#e58c7d"
    }
  }}>
  Looking to level up your team?
</Header>
```

```jsx
<Footer
  backgroundColor={VictorySettings.palestSand}
  styleOverrides={{
    display: "block"
  }}
  linkStyles={{
    color: "#c43a31",
    ":hover": {
      color: "#e58c7d"
    }
  }}
  footerLogo="img/logo.svg">
  Please press [ space ] to continue.
</Footer>
```

## Our Projects

| Project | Source      | Lander |
| ------- | ----------- | ------ |
| Builder | [FormidableLabs/builder-docs](https://github.com/FormidableLabs/builder-docs) | http://builder.formidable.com |
| Ecology | [FormidableLabs/ecology](https://github.com/FormidableLabs/ecology) | - |
| ES6 Interactive Guide | [FormidableLabs/es6-interactive-guide](https://github.com/FormidableLabs/es6-interactive-guide) | http://stack.formidable.com/es6-interactive-guide/ |
| Stack. | [FormidableLabs/formidablelabs.github.io ](https://github.com/FormidableLabs/victory) | http://stack.formidable.com/ |
| Radium | [FormidableLabs/radium](https://github.com/FormidableLabs/radium) | http://stack.formidable.com/radium/ |
| Spectacle | [FormidableLabs/spectacle](https://github.com/FormidableLabs/spectacle) | http://stack.formidable.com/spectacle/ |
| Victory | [FormidableLabs/victory](https://github.com/FormidableLabs/victory) | http://victory.formidable.com/ |

#### Notes
- All projects with landers (except Radium) are built on React
- Radium is built on jekyll

## Publish

1. Merge your PR into `master`.

2. Add a new version
```sh
npm version major|minor|patch -m "Version %s - INSERT_REASONS"
```

3. Publish
```sh
npm publish
```

4. Push commit with tags
```sh
git push origin master --tags
```

[![Made with love by Formidable](https://formidable.surge.sh/assets/readme-foots.svg)](http://formidable.com/?utm_source=github&utm_medium=OSS&utm_campaign=repository)
