// -------------------------------
// VICTORY THEME
// -------------------------------
// Settings
import settings from "./victory-settings";

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
    backgroundColor: settings.palerSand,
    fontFamily: settings.serif,
    fontSize: "18px",
    lineHeight: 1.4,
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
    border: "1px solid " + settings.paleSand,
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
  "h1, h2": {
    marginTop: `${settings.gutter*2.5}px`,
    fontSize: "40px",
    fontFamily: settings.serifHeadline,
    fontWeight: "normal",
    lineHeight: 1.3,
    textAlign: "center",
    borderBottom: `1px solid ${settings.sand}`
  },
  "h1": {
    color: settings.red,
    textAlign: "left"
  },
  "h3": {
    marginTop: `${settings.gutter*2}px`,
    fontSize: "0.75em",
    fontFamily: settings.serif,
    fontWeight: "normal",
    lineHeight: 1.5,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    textAlign: "center"
  },
  "h4, h5, h6": {
    fontSize: "1em",
    fontWeight: "bold",
    textAlign: "left"
  },
  ".Smallcaps": {
    textTransform: "uppercase",
    fontSize: "0.75em",
    fontWeight: "normal",
    letterSpacing: "0.1em",
    paddingRight: "1em"
  },
  /*
   * Links
   */
  "a": {
    cursor: "pointer",
    color: settings.darkMud,
    fontWeight: 700,
    textDecoration: "none",
    borderBottom: `1px solid ${settings.darkMud}`,
    transition: "color 0.2s ease, border-bottom 0.5s ease"
  },
  "a:hover, a:focus": {
    cursor: "pointer",
    color: settings.red,
    borderBottom: `1px solid ${settings.red}`,
    transition: "color 0.2s ease, box-shadow 0.5s ease"
  },
  ".Link--unstyled": {
    border: "none",
    boxShadow: "none"
  },
  ".Link--unstyled:hover, .Link--unstyled:focus": {
    border: "none",
    boxShadow: "none"
  },
  /*
   * Buttons!
   */
  ".Button": {
    backgroundColor: "transparent",
    border: "3px solid " + settings.palerSand,
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
  ".Button--spotlight": {
    backgroundColor: settings.mud,
    borderColor: settings.mud,
    color: settings.palerSand,
    fontSize: "1.25rem",
    transition: "color 0.2s ease, background-color 0.7s ease, border-color 0.7s ease"
  },
  ".Button--spotlight:hover, .Button--spotlight:focus": {
    backgroundColor: settings.red,
    borderColor: settings.red,
    color: "#ffffff",
    transition: "color 0.2s ease, background-color 0.7s ease, border-color 0.7s ease"
  },
  /*
   * Layout/Grid
   */
  ".Container": {
    margin: "0 auto",
    maxWidth: "960px",
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingBottom: "1em"
  },
  /*
   * Ecology
   */
  ".Ecology p, .Ecology h2, .Ecology h3, .Ecology h4, .Ecology h5, .Ecology h6": {
   maxWidth: "760px" // Ideal 60–70 characters per line
  },
  ".Ecology ul": {
    paddingLeft: "24px",
    listStyle: "none"
  },
  ".Ecology ul > li": {
    position: "relative"
  },
  ".Ecology ul > li + li": {
    marginTop: "0.25em"
  },
  ".Ecology ul > li:before": {
    content: "''",
    width: "1em",
    height: "1em",
    display: "block",
    position: "absolute",
    fontSize: "8px",
    borderRadius: "50%",
    border: "1px solid " + settings.red,
    left: "-24px",
    top: "11px"
  },
  ".Ecology li > ul": {
    marginTop: "0.25em",
    marginBottom: "0px"
  },
  ".Ecology code": {
    fontFamily: settings.monospace,
    background: settings.palestSand,
    color: settings.mud,
    borderRadius: 3,
    padding: "0 5px"
  },
  ".highlight code": {
    background: "transparent",
    padding: 0
  },
  /*
   * Ecology README text wrangling
   */
  ".Overview pre": {
    overflow: "hidden" // Hide horizontal scrollbars for playgrounds.
  },
  ".Overview pre code": { // Non-ecology code blocks
    display: "block",
    padding: "16px",
    background: settings.whiteSand,
    fontFamily: settings.monospace,
    fontSize: "1rem",
    lineHeight: 1.2,
    border: `1px solid ${settings.palestSand}`
  },
  /*
   * Interactive/Component Playground
   * .Interactive
   * |- .playground
   *    |- .playgroundCode
   *    |- .playgroundPreview
   */
  ".Interactive": {
    minHeight: "300px"  // TODO: Extract for server-side rendering
  },
  ".Interactive .playground": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${settings.gutter*3}px 0 ${settings.gutter*3}px ${settings.gutter}px`
  },
  ".Interactive .playgroundCode, .Interactive .playgroundPreview": {
    padding: `${settings.gutter}px ${settings.gutter*2}px`
  },
  ".Interactive .playgroundCode": {
    flex: "1 1 100%",
    order: "2",
    backgroundColor: settings.mud,
    color: settings.whiteSand,
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
  ".Interactive .playgroundPreview": {
    flex: "1 1 100%",
    order: "1",
    position: "relative",
    marginBottom: "32px"
  },
  ".Interactive .playgroundPreview:after": {
    counterIncrement: "interactive",
    content: "'Fig. ' counter(interactive) '.'",
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    color: settings.palerMud,
    fontFamily: settings.serif,
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: 1,
    textAlign: "center"
  },
  ".Interactive pre, .CodeMirror-code": {
    fontFamily: settings.monospace,
    fontSize: "18px",
    lineHeight: 1.2
  },
  ".CodeMirror": {
    height: "auto"
  },
  /*
  * Documentation/Props
  */
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
    fontWeight: "bold",
    color: settings.darkSand,
    letterSpacing: "0.04em",
    textTransform: "uppercase"
  },
  ".Prop-examples-value": {
    fontFamily: settings.monospace
  },
  ".Prop-default-value": {
    fontFamily: settings.monospace,
    color: settings.paleMud
  },
  /* Utilities */
  ".u-textCenter": {
    textAlign: "center"
  },
  ".u-textLeft": {
    textAlign: "left"
  },
  ".u-textRight": {
    textAlign: "right"
  },
  ".u-marginModule > *:first-child": {
    marginTop: 0
  },
  mediaQueries: {
    [settings.mediaQueries.medium]: {
      body: {
        fontSize: "24px",
        lineHeight: 1.5
      },
      "h1, h2": {
        marginTop: `${settings.gutter*3}px`,
        fontSize: "48px"
      },
      ".Ecology p": {
        fontSize: "24px"
      },
      ".Interactive .playground": {
        flexWrap: "wrap",
        alignItems: "flex-start"
      },
      ".Interactive .playgroundCode": {
        display: "flex",
        flex: "1 1 auto",
        marginTop: `${settings.gutter*3}px`
      },
      ".Interactive .playgroundPreview": {
        display: "flex",
        flex: "0 1 auto"
      }
    }
  },
  /**
   * ECOLOGY PLAYGROUND THEME
   * "
   *  Using Zenburn color palette from the Emacs Zenburn Theme
   *  https://github.com/bbatsov/zenburn-emacs/blob/master/zenburn-theme.el
   *
   *  Also using parts of https://github.com/xavi/coderay-lighttable-theme
   * "
   * From: https://github.com/wisenomad/zenburn-lighttable-theme/blob/master/zenburn.css
   */
  ".cm-s-elegant .CodeMirror-gutters": {
    background: `${settings.mud} !important`
  },
  ".cm-s-elegant .CodeMirror-foldgutter-open, .CodeMirror-foldgutter-folded": {
    color: "#999"
  },
  ".cm-s-elegant .CodeMirror-cursor": {
    borderLeft: "1px solid white"
  },
  ".cm-s-elegant": {
    backgroundColor: settings.mud,
    color: "#dcdccc"
  },
  ".cm-s-elegant span.cm-builtin": {
    color: "#dcdccc",
    fontWeight: "bold"
  },
  ".cm-s-elegant span.cm-comment": {
    color: "#7f9f7f"
  },
  ".cm-s-elegant span.cm-keyword": {
    color: "#f0dfaf",
    fontWeight: "bold"
  },
  ".cm-s-elegant span.cm-atom": {
    color: "#bfebbf"
  },
  ".cm-s-elegant span.cm-def": {
    color: "#dcdccc"
  },
  ".cm-s-elegant span.cm-variable": {
    color: "#dfaf8f"
  },
  ".cm-s-elegant span.cm-variable-2": {
    color: "#dcdccc"
  },
  ".cm-s-elegant span.cm-string": {
    color: "#cc9393"
  },
  ".cm-s-elegant span.cm-string-2": {
    color: "#cc9393"
  },
  ".cm-s-elegant span.cm-number": {
    color: "#dcdccc"
  },
  ".cm-s-elegant span.cm-tag": {
    color: "#93e0e3"
  },
  ".cm-s-elegant span.cm-property": {
    color: "#dfaf8f"
  },
  ".cm-s-elegant span.cm-attribute": {
    color: "#dfaf8f"
  },
  ".cm-s-elegant span.cm-qualifier": {
    color: "#7cb8bb"
  },
  ".cm-s-elegant span.cm-meta": {
    color: "#f0dfaf"
  },
  ".cm-s-elegant span.cm-header": {
    color: "#f0efd0"
  },
  ".cm-s-elegant span.cm-operator": {
    color: "#f0efd0"
  },
  ".cm-s-elegant span.CodeMirror-matchingbracket": {
    boxSizing: "border-box",
    background: "transparent",
    borderBottom: "1px solid"
  },
  ".cm-s-elegant span.CodeMirror-nonmatchingbracket": {
    borderBottom: "1px solid",
    background: "none"
  },
  ".cm-s-elegant .CodeMirror-activeline": {
    background: "#000000"
  },
  ".cm-s-elegant .CodeMirror-activeline-background": {
    background: "#000000"
  },
  ".cm-s-elegant div.CodeMirror-selected": {
    background: "#545454"
  },
  ".cm-s-elegant .CodeMirror-focused div.CodeMirror-selected": {
    background: "#4f4f4f"
  }
};
