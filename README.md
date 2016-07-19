# Formidable Landers

Welcome to the HQ of maintaining our visible Formidable projects. Our issues capture the planning process for their landing pages.

Our goal is to maintain consistent branding and wording across all of our visible projects. For example, they should all have the same header and footer.

## Install and Usage

Add `formidable-landers` as a dependency.
```
npm install formidable-landers --save
```

#### Header & Footer
Import the desired components and any variables/settings if available.
```jsx
import { Header, Footer } from "formidable-landers";
```

Both the `<Header />` and `<Footer />` components can be dropped in as is or be customized. The default background colors are sandy, so you should add a `background` prop at minimum.
```jsx
<Header background="#242121" />
<Footer background="#242121" />
```

Available props:
```jsx
<Header
  background={string}
  styleOverrides={obj}
  linkStyles={obj}
>
  Looking to level up your team?
</Header>
```

```jsx
<Footer
  background={string}
  styleOverrides={obj}
  linkStyles={obj}
  logoColor={"white" || "black"}
>
  Please press [ space ] to continue.
</Footer>
```

#### Themes & Settings
We house some shared themes & settings here. Vicotry for example, is made up of multiple repositories, so we keep the styles in sync here.
```jsx
import { VictorySettings, VictoryTheme } from "formidable-landers";
```

#### Markdown Renderers
Ecology uses marked, which supports custom renderer functions for markdown.
```jsx
import { appendLinkIcon, ecologyPlaygroundLoading } from "formidable-landers";
```
- __appendLinkIcon__: Adds either an external or internal icon to a link, depending if it is originating from `fomridable.com`. This is useful for providing routing context to the user.

- __ecologyPlaygroundLoading__: This function adds classnames to codeblocks rendered by Ecology. This is useful for styling elements that are server-rendered while we are waiting for the client application to load.

#### Other Components
These are common functions/components that we might use across our internal properties.

- __DatasetDropdown__: This component can be passed to ecology via scope, along with a dataset, and then used inside of an ecology playground to render a select dropdown. This allows a developer to show multiple datasets inside of a playground.

Example dataset (dataset.js):
```js
export default [
  {
    id: 0,
    label: "Positive",
    data: [{x: 0, y: 0}, {x: 10, y: 20}, {x: 2, y: 1}]
  },
  {
    id: 1,
    label: "Negative",
    data: [{x: 0, y: 0}, {x: -1, y: -2}, {x: -2, y: -1}]
  }
];
```

Example ecology playground (ecology.md):
```
```playground_norender
class App extends React.Component {
  render() {
    return (
      <VictoryChart>
        <VictoryScatter
          data={this.context.dataset}
        />
      </VictoryChart>
    );
  }
}

App.contextTypes = {
  dataset: React.PropTypes.array
};

ReactDOM.render(<DatasetDropdown dataset={dataset}><App/></DatasetDropdown>, mountNode);
```


## Our Projects

| Project | Source      | Lander |
| ------- | ----------- | ------ |
| Builder | [FormidableLabs/builder-docs](https://github.com/FormidableLabs/builder-docs) | http://formidable.com/open-source/builder |
| Ecology | [FormidableLabs/ecology](https://github.com/FormidableLabs/ecology) | - |
| ES6 Interactive Guide | [FormidableLabs/es6-interactive-guide](https://github.com/FormidableLabs/es6-interactive-guide) | http://stack.formidable.com/es6-interactive-guide/ |
| Open Source | [FormidableLabs/formidablelabs.github.io ](https://github.com/FormidableLabs/formidablelabs.github.io) | http://stack.formidable.com/ |
| Radium | [FormidableLabs/radium](https://github.com/FormidableLabs/radium) | http://stack.formidable.com/radium/ |
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
