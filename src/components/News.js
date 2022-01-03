import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import './styling.css'


const News = (props) => {
    const [articles, setArticles] = useEffect('')
    const [loading, setLoading] = useEffect(true)
    const [page, setPage] = useEffect(1)
    const [totalResults, settotalResults] = useState(0)
    document.title = `${props.category ? capitalizeFirstLetter(props.category) : "Home"} - Aksabar Ki Patrika`;

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(20);
        setLoading(true);
        props.setProgress(40);
        let data = await fetch(url);
        props.setProgress(60);
        let parsedData = await data.json();
        props.setProgress(80);
        setArticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    }, [])

    const handlePreviousClick = async () => {
        setPage(page - 1)
        updateNews();
    }

    const handleNextClick = async () => {
        setPage(page + 1)
        updateNews();
    }

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults)
    }

    return (
        <div className='container my-3'>
            <h2 className="text-center news__heading">Nationel News - Top {props.category ? capitalizeFirstLetter(props.category) : "and Latest Updates"} Headlines</h2>
            {loading && <Spinner />}
            <div className="row m-3 mx-auto" >
                {!loading && articles.map((element) => {
                    return <div className="col-md-4" key={element.url} >
                        <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} Url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-outline-info m-3" onClick={handlePreviousClick}> &larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-outline-info m-3" onClick={handleNextClick}>Next &rarr; </button>
            </div>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
