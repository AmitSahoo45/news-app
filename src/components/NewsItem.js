import React from 'react'
import "./styling.css"

const NewsItem = (props) => {

    // render() {
    let { title, description, imageUrl, Url, author, date, source } = props;
    return (
        <div className="my-3 mx-3 news__box__container">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '-10px', top: '-10px' }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://www.stockvault.net/data/2019/01/28/259696/preview16.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{!title ? "Unknown" : title}</h5>
                    <p className="card-text">{!description ? "Welcome to Aksabar Ki Patrika" : description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={Url} target="_blank" rel="noreferrer" className="btn btn-sm btn-success">Read More</a>
                </div>
            </div>
        </div>
    )
    // }
}

export default NewsItem
