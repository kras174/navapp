import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNews } from "../actions/newsActions";
import News from "../containers/News";

class NewsContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <News news={this.props.news} loadNews={this.props.loadNews} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    news: store.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadNews: () => dispatch(loadNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
