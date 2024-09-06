"use client";

import React, { Component } from "react";
import * as Icon from "react-feather";

interface GoTopState {
  is_visible: boolean;
}

export default class GoTop extends Component<{}, GoTopState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="">
        {is_visible && (
          <div className="go-top" onClick={() => this.scrollToTop()}>
            <Icon.ArrowUp />
          </div>
        )}
      </div>
    );
  }
}
