import React from 'react'

const Summary = () => {
  return (
    <section id='Summary'>
      <div className="row">
        <div className="summary__container">
            <div className="summary__left">
                <figure className="summary__img--wrapper">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg" alt="" className="summary__img" />
                </figure>
            </div>
            <div className="summary__right">
                <div className="summary__description">
                    <div className="summary__top">
                        <h2 className="summary__title">The Fast and the Furious</h2>
                        <div className="summary__title--under">
                            <h4>2001</h4>
                            <h4>|</h4>
                            <h4>PG-13</h4>
                            <h4>|</h4>
                            <h4>106 min</h4>
                        </div>
                    </div>
                    <div className="summary__middle">
                        <div className="summary__middle--upper">
                            Action, Crime, Thriller
                        </div>
                        <p>Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to end it.</p>
                    </div>
                    <div className="summary__bottom">
                        <h4>Directed by: Rob Cohen</h4>
                        <h4>Written by: Ken Li, Gary Scott Thompson, Erik Bergquist</h4>
                        <h4>Starring: Vin Diesel, Paul Walker, Michelle Rodriguez</h4>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Summary
