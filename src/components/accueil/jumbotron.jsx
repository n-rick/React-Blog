import React, { useState, useEffect } from 'react'
import { getAllArticle } from '../../services/articles'

export default function Jumbotron() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const localStorage = window.localStorage;
        const localArticleString = localStorage.getItem('artciles');
        if (localArticleString) {
            const articlesLocalArray = JSON.parse(localArticleString)
            setArticles(articlesLocalArray);
        }

        getAllArticle().then((data) => {
                const articleApi = data || [];
            setArticles(articleApi)
            localStorage.setItem('articles', JSON.stringify(articleApi))

        })
    }, [])

    return (
        <div>
            <div className="accordion d-flex justify-content-center" id="accordionExample">
                <div className="card align-items-center w-100">
                    <div className="card-header" id="headingOne">
                        <h1 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Ma bibliothèque
                            </button>
                        </h1>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="jumbotron">
                            <h1 className="display-3">Ma bibliothèque</h1>
                            <section>
                                {articles.map((article, index) => {
                                    return <h2 key={index}>{article.title}</h2>
                                })}
                            </section>
                            <p className="lead">
                                <a className="btn btn-outline-info btn-lg p-2" href="#" role="button">En savoir plus</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
