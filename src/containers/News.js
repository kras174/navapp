import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNews } from "../actions/newsActions";

class News extends Component {
  componentDidMount() {
    this.props.loadNews();
  }
  renderTemplate = () => {
    const { newsList, isFetching, error } = this.props.news;
    console.log("Render news!"); // Пофиксить многократный рендер
    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }

    if (isFetching) {
      return <p>Загружаю...</p>;
    }

    if (!isFetching && newsList.articles.length) {
      return newsList.articles.map((item, index) => {
        return (
          <div className="news-item" key={index}>
            <h2 className="news-item-title">
              <a href={item.url}>{item.title}</a>
            </h2>
            <div className="news-item-content">
              <img className="news-item-img" src={item.urlToImage} alt="" />
              <p className="news-item-text">{item.description}</p>
            </div>
            <hr />
          </div>
        );
      });
    } else {
      return <h2>Новостей пока нет...</h2>;
    }
  };
  render() {
    return <div className="news-list container">{this.renderTemplate()}</div>;
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
