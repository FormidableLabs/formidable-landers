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

Both the `<Header />` and `<Footer />` components can be dropped in as is or be customized. The default background colors are sandy, so I recommend adding a `background` prop at minimum.
```jsx
<Header background="#242121" />
<Footer background="#242121" />
```

All the available customizations:
```jsx
<Header
  background={VictorySettings.palestSand}
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
  background={VictorySettings.palestSand}
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
| Builder | [FormidableLabs/builder-docs](https://github.com/FormidableLabs/builder-docs) | http://formidable.com/open-source/builder |
| Ecology | [FormidableLabs/ecology](https://github.com/FormidableLabs/ecology) | - |
| ES6 Interactive Guide | [FormidableLabs/es6-interactive-guide](https://github.com/FormidableLabs/es6-interactive-guide) | http://stack.formidable.com/es6-interactive-guide/ |
| Open Source | [FormidableLabs/formidablelabs.github.io ](https://github.com/FormidableLabs/formidablelabs.github.io) | http://stack.formidable.com/ |
| Playbook | [FormidableLabs/formidable-playbook](https://github.com/FormidableLabs/formidable-playbook) | http://formidable.com/open-source/playbook |
| Radium | [FormidableLabs/radium](https://github.com/FormidableLabs/radium) | http://formidable.com/open-source/radium/ |
| Spectacle | [FormidableLabs/spectacle](https://github.com/FormidableLabs/spectacle) | http://formidable.com/open-source/spectacle/ |
| Victory | [FormidableLabs/victory](https://github.com/FormidableLabs/victory) | http://formidable.com/open-source/victory |

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
