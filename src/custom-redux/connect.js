import React from "react";
import PropTypes from "prop-types";

const connect = (mapStateToProps = () => ({}), mapDispatchToProps = () => ({})) => Component => {
  class ConnectedComponent extends React.Component {
    componentWillMount() {
      const { store } = this.context;
      this.onStoreOrPropsChange(this.props);
      this.unsubscribe = store.subscribe(() => this.onStoreOrPropsChange(this.props));
    }
    componentWillReceiveProps(nextProps) {
      this.onStoreOrPropsChange(nextProps);
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    onStoreOrPropsChange(props) {
      const { store } = this.context;
      const state = store.getState();
      const stateProps = mapStateToProps(state, props);
      const dispatchProps = mapDispatchToProps(store.dispatch, props);
      this.setState({
        ...stateProps,
        ...dispatchProps
      });
    }
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }

  ConnectedComponent.contextTypes = {
    store: PropTypes.object
  };
  return ConnectedComponent;
};

export default connect;
