import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired
};

export default Provider;
