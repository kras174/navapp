import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNews } from "../actions/newsActions";

class News extends Component {
  componentDidMount() {
    this.props.loadNews();
  }
  renderTemplate = () => {
    const { newsList, isFetching } = this.props.news;
    console.log("Render news!"); // Пофиксить многократный рендер
    if (!isFetching && newsList.articles.length) {
      return newsList.articles.map((item) => {
        return (
          <div className="news-item">
            <img className="news-item-img" src={item.urlToImage} alt="" />
            <h2 className="news-item-title">{item.title}</h2>
            <p className="news-item-description">{item.description}</p>
          </div>
        );
      });
    }
  };
  render() {
    return <div className="news-list">{this.renderTemplate()}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(News);
