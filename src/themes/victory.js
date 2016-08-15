/* eslint-disable max-len */
// -------------------------------
// VICTORY THEME
// -------------------------------
// Settings
import settings from "./victory-settings";

const playgroundSettings = {
  recipePlaygroundHeight: "400px",
  playgroundHeight: "340px"
};

// Stylesheet
export default {
  /*
   * Normalize & Element Selectors
   */
  "*, *:before, *:after": {
    boxSizing: "inherit"
  },
  html: {
    textSizeAdjust: "100%"
  },
  body: {
    background: settings.palerSand,
    fontFamily: settings.serif,
    fontSize: "20px",
    lineHeight: 1.3,
    margin: 0,
    color: settings.mud,
    counterReset: "interactive",
    boxSizing: "border-box"
  },
  "html, body": {
    overflowX: "hidden"
  },
  "article, aside, details, figcaption, figure, footer": {
    display: "block"
  },
  "header, hgroup, main, menu, nav, section, summary": {
    display: "block"
  },
  table: {
    borderCollapse: "collapse",
    display: "block",
    overflow: "auto",
    width: "100%"
  },
  "thead, tbody": {
    border: 0,
    margin: 0,
    padding: 0,
    fontSize: "100%"
  },
  thead: {
    font: "inherit",
    verticalAlign: "baseline"
  },
  tbody: {
    verticalAlign: "middle"
  },
  "th, td": {
    border: `1px solid ${settings.paleSand}`,
    padding: "0.425em 0.75em",
    verticalAlign: "top"
  },
  "th code, td code": {
    background: "none",
    color: settings.darkMud
  },
  th: {
    fontWeight: "bold",
    textAlign: "left"
  },
  "h1,h2,h3,h4,h5,h6,hgroup, ul,ol,dd, p,figure, pre,table,fieldset,hr, .highlight": {
    marginTop: settings.gutter,
    marginBottom: 0
  },
  img: {
    maxWidth: "100%"
  },
  "svg, img": {
    fill: "currentColor"
  },
  /*
   * Headlines/Headings
   */
  "h1": {
    borderBottom: `1px solid ${settings.sand}`,
    color: settings.red,
    fontSize: "40px",
    fontFamily: settings.serifHeadline,
    fontWeight: "normal",
    marginTop: `${settings.gutter * 2.5}px`,
    lineHeight: 1
  },
  "h2": {
    color: settings.red,
    fontFamily: settings.serifHeadline,
    fontSize: "2em",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 1,
    marginTop: `${settings.gutter * 1.5}px`
  },
  "h3": {
    color: settings.mud,
    fontFamily: settings.serif,
    fontSize: "1.3em",
    fontWeight: "bold",
    marginTop: `${settings.gutter * 1.5}px`,
    lineHeight: 1
  },
  "h4": {
    marginTop: `${settings.gutter * 1.5}px`,
    fontSize: "1em",
    fontFamily: settings.sansSerif,
    fontWeight: "500",
    lineHeight: 1.5,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    textAlign: "left"
  },
  "h5, h6": {
    marginTop: `${settings.gutter * 1.5}px`,
    fontSize: "1.25em",
    fontWeight: "bold",
    textAlign: "left"
  },
  /*
   * Links
   */
  "a:link": {
    color: settings.red,
    fontWeight: "normal",
    textDecoration: "none",
    transition: "color 250ms ease-in"
  },
  "a:visited": {
    color: settings.palerMud
  },
  "a:hover, a:focus": {
    cursor: "pointer",
    color: settings.darkMud,
    transition: "color 300ms ease-out"
  },
  /*
   * Buttons!
   */
  ".Button": {
    background: "transparent",
    border: `3px solid ${settings.palerSand}`,
    boxShadow: "none",
    color: settings.darkestSand,
    fontFamily: settings.sansSerif,
    fontWeight: "normal",
    padding: "0.75em 1.25em",
    textAlign: "center",
    transition: "color 0.2s ease, border-color 0.7s ease"
  },
  ".Button:hover, .Button:focus": {
    borderColor: settings.palestRed,
    boxShadow: "none",
    color: settings.red,
    outline: "none",
    transition: "color 0.2s ease, border-color 0.7s ease"
  },
  /*
   * Layout/Grid for running docs locally
   */
  ".Container": {
    margin: "0 auto",
    maxWidth: "1440px",
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingBottom: "1em"
  },
  /*
   * .Ecology
   * |- .Overview
   * |- .Documentation
   *    |- table.Props
   */
  ".Ecology p, .Ecology h2, .Ecology h3, .Ecology h4, .Ecology h5, .Ecology h6": {
    maxWidth: "760px" // Ideal 60–70 characters per line
  },
  ".Ecology ul": {
    paddingLeft: `${settings.gutter}px`,
    listStyle: "none"
  },
  ".Ecology ul > li": {
    position: "relative"
  },
  ".Ecology ul > li:before": {
    content: " ",
    width: "1em",
    height: "1em",
    display: "block",
    position: "absolute",
    fontSize: "8px",
    borderRadius: "50%",
    border: `1px solid ${settings.darkMud}`,
    left: `${settings.gutter * -1}px`,
    top: "11px"
  },
  ".Ecology li > ul": {
    marginTop: "0.25em",
    marginBottom: "0px"
  },
  ".Ecology code": {
    background: settings.palestSand,
    borderRadius: 3,
    color: settings.mud,
    fontFamily: settings.monospace,
    fontSize: "0.85em",
    padding: "0 5px"
  },
  ".highlight code": {
    background: "transparent",
    padding: 0
  },
  /*
  * Rendered Markdown
  */
  ".Main pre": {
    margin: `0 ${settings.gutter * -1}px` // break grid
  },
  ".Main pre pre": {
    margin: 0
  },
  /*
   * Ecology README text wrangling
   */
  ".Overview h1:first-child": {
    marginTop: 0
  },
  ".Overview pre": {
    overflow: "hidden" // Hide horizontal scrollbars for playgrounds.
  },
  ".Overview pre code": { // Non-ecology code blocks
    background: settings.palestSand,
    borderRadius: 0,
    color: settings.darkMud,
    display: "block",
    fontFamily: settings.monospace,
    lineHeight: 1.2,
    margin: `${settings.gutter}px 0 !important`,
    padding: `${settings.gutter}px ${settings.gutter * 3}px`
  },
  ".fancyBorder": {
    borderLeft: `4px solid ${settings.darkerSand}`,
    borderTop: `4px solid ${settings.darkerSand}`,
    boxShadow:
      `0 0 0 1px ${settings.darkerSand},
       0 0 0 5px ${settings.palerSand},
       0 0 0 6px ${settings.darkerSand},
       -1px 11px 0 0 ${settings.darkerSand},
       11px 11px 0 0 ${settings.darkerSand},
       11px -1px 0 0 ${settings.darkerSand}`
  },
  /*
   * Vertically stacked playground for Recipes
   * .Recipe
   * |- pre
   *    |- .Interactive
   *       |- .playground
   *          |- .playgroundCode
   *          |- .playgroundPreview
   */
  ".Recipe .Interactive .playground": {
    flexDirection: "column"
  },
  ".Recipe .Interactive .playgroundPreview": {
    flex: "1 0 auto"
  },
  /*
   * Interactive/Component Playground
   * .Interactive
   * |- .playground
   *    |- .playgroundCode
   *    |  |- .playgroundStage
   *    |- .playgroundPreview
   *       |- div
   *          |- .playgroundError
   *          |- .previewArea
   *             |- div
   */
  ".Interactive": {
    position: "relative",
    background: settings.whiteSand,
    margin: `${settings.gutter}px 0`,
    width: "100%"
  },
  ".Interactive .playground": {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 0
  },
  ".Interactive .playgroundCode": {
    backgroundColor: settings.codeMirror.bg,
    flex: "auto",
    order: "2",
    margin: 0,
    padding: 0
  },
  ".Interactive .playgroundStage": {
    padding: `${settings.gutter}px ${settings.gutter}px`,
    width: "100%",
    height: "100%",
    maxHeight: "340px",
    overflow: "scroll"
  },
  ".Interactive .playgroundPreview": {
    alignItems: "center",
    display: "flex",
    flex: `1 1 ${playgroundSettings.playgroundHeight}`,
    justifyContent: "center",
    order: "1",
    padding: `0 0 ${settings.gutter * 2}px 0`,
    position: "relative",
    textAlign: "center"
  },
  ".Interactive .playgroundPreview > div:first-child": {
    width: "100%",
    margin: "0 auto"
  },
  ".Interactive .previewArea": {
    height: "100%",
    minHeight: "100px",
    width: "auto"
  },
  ".Interactive .previewArea > div:first-child": {
    height: "100%",
    margin: "0 auto",
    width: "100%"
  },
  ".Interactive .playgroundPreview svg": {
    height: "inherit !important", // overriding default Victory inline styles
    margin: "0 auto",
    maxHeight: "280px",
    width: "auto !important" // overriding default Victory inline styles
  },
  ".Interactive .playgroundPreview:after": {
    counterIncrement: "interactive",
    content: `Fig. " counter(interactive) "`,
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    color: settings.mud,
    fontFamily: settings.sansSerif,
    fontWeight: "normal",
    fontSize: "18px",
    margin: `${settings.gutter * 2}px ${settings.gutter}px ${settings.gutter}px`,
    lineHeight: 1,
    textAlign: "center"
  },
  ".Interactive .playgroundError": {
    background: settings.paleRed,
    color: settings.whiteSand,
    fontFamily: settings.monospace,
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: 1.2,
    overflow: "scroll",
    padding: `${settings.gutter}px`,
    textAlign: "left",
    whiteSpace: "pre",
    width: "100%"
  },
  ".Interactive pre, .CodeMirror-code": {
    fontFamily: settings.monospace,
    fontSize: "16px",
    lineHeight: 1.2
  },
  ".CodeMirror": {
    background: "none !important",
    height: "auto"
  },
  /*
  * Component Dataset Dropdown
  */
  ".Interactive .previewArea .playgroundDatasetSelectWrapper": {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: "10px",
    top: "10px"
  },
  ".Interactive .previewArea .playgroundDatasetSelectWrapper ~ *": {
    marginTop: "40px"
  },
  ".Interactive .previewArea .playgroundDatasetSelect": {
    border: `1px solid ${settings.paleSand}`,
    fontSize: "14px"
  },
  ".Interactive .previewArea .playgroundDatasetSelectLabel": {
    fontSize: "14px",
    marginRight: "5px",
    lineHeight: 1.4
  },
  /*
   * Component Playground Export/Copy Buttons
   * .Interactive
   * |- .Toolbar
   *    |- button.Button-GistExport
   *    |- button.Button-Clipboard
   */
  ".Interactive .Toolbar": {
    position: "absolute",
    display: "flex",
    zIndex: 2,
    right: "0px",
    top: playgroundSettings.playgroundHeight,
    padding: "0px 5px",
    margin: "7.5px 0px"
  },
  ".Interactive .Toolbar button": {
    margin: "0px 2.5px",
    border: `1px solid ${settings.sand}`,
    borderRadius: "1px",
    backgroundColor: "transparent",
    fontFamily: settings.monospace,
    fontSize: "11px",
    color: settings.sand,
    cursor: "Pointer"
  },
  ".Interactive .Toolbar button:hover": {
    backgroundColor: settings.sand,
    color: settings.whiteSand
  },
  // Add padding when toolbar buttons are visible
  ".Interactive .Toolbar ~ .playground .playgroundStage": {
    paddingTop: "30px"
  },
  /*
  * Documentation/Props
  */
  ".Documentation": {
    paddingRight: 0,
    paddingLeft: 0
  },
  ".Documentation h1, .Documentation h2, .Documentation h3": {
    fontFamily: settings.serif,
    fontWeight: "normal"
  },
  ".Prop td:first-child": {
    maxWidth: "30em"
  },
  ".Prop-name": {
    fontFamily: settings.monospace
  },
  ".Prop-type": {
    color: settings.darkSand,
    display: "block",
    fontFamily: settings.sansSerif,
    fontStyle: "italic",
    lineHeight: 1.3
  },
  ".Prop-description": {
    display: "block",
    maxWidth: "760px",
    lineHeight: 1.45
  },
  ".Prop-examples, .Prop-default": {
    marginTop: settings.gutter,
    display: "block",
    lineHeight: 1.45
  },
  ".Prop-examples-title, .Prop-default-title": {
    paddingRight: "1em",
    fontFamily: settings.sansSerif,
    fontSize: "0.85em",
    fontWeight: "normal",
    color: settings.darkSand,
    letterSpacing: "0.1em",
    textTransform: "uppercase"
  },
  ".Prop-examples-value": {
    fontFamily: settings.monospace
  },
  ".Prop-default-value": {
    fontFamily: settings.monospace,
    color: settings.paleMud
  },
  /*
   * Media Queries
  **/
  mediaQueries: {
    [settings.mediaQueries.small]: {
      ".Interactive .playground": {
        flexDirection: "row",
        flexWrap: "nowrap"
      },
      ".Intereactive .playgroundCode": {
        flex: "1 0 45%"
      },
      ".Intereactive .playgroundStage": {
        maxHeight: playgroundSettings.playgroundHeight
      },
      ".Interactive .playgroundPreview": {
        flex: "0 1 55%"
      },
      ".Interactive .playgroundPreview svg": {
        width: "100% !important"
      },
      ".Interactive .Toolbar": {
        top: "0px"
      },
      ".Interactive .Toolbar button": {
        border: `1px solid ${settings.darkerSand}`,
        fontSize: "9px",
        color: settings.sand
      },
      ".Interactive .Toolbar button:hover": {
        backgroundColor: settings.darkerSand,
        color: settings.codeMirror.bg
      }
    },
    [settings.mediaQueries.medium]: {
      body: {
        fontSize: "22px",
        lineHeight: 1.4
      },
      "h1, h2": {
        marginTop: `${settings.gutter * 3}px`
      },
      "h1": {
        fontSize: "48px"
      },
      "h3, h4, h5, h6": {
        marginTop: `${settings.gutter * 2}px`
      },
      ".Documentation": {
        paddingRight: `${settings.gutter}px`
      },
      ".Main pre": {
        margin: `0 ${settings.gutter * -2}px` // break grid
      },
      ".Main pre pre": {
        margin: 0
      }
    },
    [settings.mediaQueries.large]: {
      body: {
        fontSize: "24px",
        lineHeight: 1.4
      },
      ".Main pre": {
        margin: `0 ${settings.gutter * -3}px` // break grid
      },
      ".Main pre pre": {
        margin: 0
      },
      ".Interactive": {
        margin: `${settings.gutter * 2}px 0 ${settings.gutter}px`
      },
      ".Interactive pre, .CodeMirror-code": {
        fontFamily: settings.monospace,
        fontSize: "18px",
        lineHeight: 1.2
      },
      ".Interactive .playground": {
        alignItems: "stretch",
        justifyContent: "space-between",
        padding: 0
      },
      ".Interactive .playgroundCode": {
        display: "flex",
        flex: "3 2 55%",
        margin: 0,
        padding: 0
      },
      ".Interactive .playgroundError": {
        margin: 0,
        padding: `${settings.gutter}px ${settings.gutter * 2}px`,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      ".Recipe .Interactive .playground": {
        marginLeft: 0
      }
    }
  },
  /**
   * Ecology Playground Theme/Color Palette
   */
  ".playgroundStage": {
    // Default state
    background: settings.codeMirror.bg,
    color: settings.whiteSand,
    transition: "background-color 195ms ease-in"
  },
  ".playgroundStage.ReactCodeMirror--focused": {
    // Focused state
    background: settings.codeMirror.bgFocused,
    transition: "background-color 250ms ease-out"
  },
  ".cm-s-elegant .CodeMirror-selected": {
    // text selection
    background: settings.mud
  },
  ".cm-s-elegant .CodeMirror-activeline": {
    background: "#000000"
  },
  ".cm-s-elegant .CodeMirror-activeline-background": {
    background: "#000000"
  },
  ".cm-s-elegant .CodeMirror-gutters": {
    background: `${settings.darkMud} !important`
  },
  ".cm-s-elegant .CodeMirror-foldgutter-open, .CodeMirror-foldgutter-folded": {
    color: "#999"
  },
  ".cm-s-elegant div.CodeMirror-cursor": {
    borderLeft: "1px solid white !important"
  },
  ".cm-s-elegant span.cm-builtin": {
    color: settings.paleSand,
    textDecoration: "underline"
  },
  ".cm-s-elegant span.cm-comment": {
    color: settings.codeMirror.gray
  },
  ".cm-s-elegant span.cm-operater": {
    color: settings.codeMirror.softCyan
  },
  ".cm-s-elegant span.cm-keyword": {
    color: settings.codeMirror.blue
  },
  ".cm-s-elegant span.cm-atom": {
    color: settings.codeMirror.cyan
  },
  ".cm-s-elegant span.cm-def": {
    color: settings.codeMirror.lace
  },
  ".cm-s-elegant span.cm-attribute": {
    color: settings.codeMirror.softLace
  },
  ".cm-s-elegant span.cm-variable": {
    color: settings.codeMirror.softLace
  },
  ".cm-s-elegant span.cm-variable-2": {
    color: settings.codeMirror.softLace
  },
  ".cm-s-elegant span.cm-string": {
    color: settings.codeMirror.lime
  },
  ".cm-s-elegant span.cm-string-2": {
    color: settings.codeMirror.yellow
  },
  ".cm-s-elegant span.cm-number": {
    color: settings.codeMirror.purple
  },
  ".cm-s-elegant span.cm-tag": {
    color: settings.codeMirror.red
  },
  ".cm-s-elegant span.cm-property": {
    color: settings.codeMirror.sandStone
  },
  ".cm-s-elegant span.cm-qualifier": {
    color: settings.codeMirror.orange
  },
  ".cm-s-elegant span.cm-meta": {
    color: settings.codeMirror.cyan
  },
  ".cm-s-elegant span.cm-header": {
    color: settings.codeMirror.red
  },
  ".cm-s-elegant span.cm-operator, .CodeMirror pre": {
    color: settings.codeMirror.sandStone
  },
  ".cm-s-elegant span.CodeMirror-matchingbracket": {
    boxSizing: "border-box",
    background: "transparent",
    borderBottom: "1px solid"
  },
  ".cm-s-elegant span.CodeMirror-nonmatchingbracket": {
    borderBottom: "1px solid",
    background: "none"
  }
};
