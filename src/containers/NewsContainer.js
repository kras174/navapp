// import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNews } from "../actions/newsActions";
import News from "../components/News";

// class NewsContainer extends Component {
//   render() {
//     const { news, loadNews } = this.props;
//     return <News newsList={news.newsList} isFetching={news.isFetching} error={news.error} loadNews={loadNews} />;
//   }
// }

const mapStateToProps = (store) => {
  return {
    // news: store.news,
    newsList: store.news.newsList,
    isFetching: store.news.isFetching,
    error: store.news.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadNews: () => dispatch(loadNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
