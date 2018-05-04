import { Children, Component } from "react";
import PropTypes from "prop-types";
import withSideEffect from "react-side-effect";

class BodyClassName extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    const { children } = this.props;
    return children ? Children.only(children) : null;
  }
}

const reducePropsToState = (propsList) => {
  return propsList.map((props) => props.className).join(" ");
};

const handleStateChangeOnClient = (className) => {
  document.body.className = className;
};

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(BodyClassName);
