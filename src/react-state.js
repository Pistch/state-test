import React from "react";

import state from './app-state';

export function getContainer(data, methods) {
  return class Container extends React.Component {
    constructor(props) {
      super(props);

      this.state = data;
    }

    componentDidMount() {
      state.registerHandler(this.setInnerState);
    }

    componentWillUnmount() {
      state.dropHandler(this.setInnerState);
    }

    setInnerState = (diff) => {
      this.setState(diff);
    }

    render()  {
      const {component: Component} = this.props;

      return <Component {...this.state} {...methods} />;
    }
  }
}