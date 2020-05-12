import React, { Component } from "react";
import PropTypes from "prop-types";

export default class News extends Component {
  componentDidMount() {
    this.props.loadNews();
  }
  renderTemplate = () => {
    const { newsList, isFetching, error } = this.props;
    console.log("Render news!"); // Пофиксить многократный рендер
    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }

    if (isFetching) {
      return <h2>Загружаю...</h2>;
    }

    if (!isFetching && newsList.articles.length) {
      return newsList.articles.map((item, index) => {
        return (
          <div className="news-item" key={index}>
            <h2 className="news-item-title">
              <a href={item.url}>{item.title}</a>
            </h2>
            <div className="news-item-content">
              <div className="news-img-container">
                <img className="news-item-img" src={item.urlToImage} alt="" />
              </div>
              <p className="news-item-text">{item.description}</p>
            </div>
          </div>
        );
      });
    } else {
      return <h2>Новостей пока нет...</h2>;
    }
  };
  render() {
    return <div className="news-list">{this.renderTemplate()}</div>;
  }
}

News.propTypes = {
  newsList: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  loadNews: PropTypes.func.isRequired,
};
