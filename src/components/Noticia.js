import React from 'react'
import PropTypes from 'prop-types'
import styles from './Noticia.module.css'

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description} = noticia;

   const image = urlToImage ? 
        <div className="card-image image-top">
             <img src={urlToImage} alt={title} className={`${styles.card_img}`}/>
        </div>
        :
        null

    return (
        <div className='col s12 m6 l4'>
            <div className={`${styles.card_height} card`}>
                {image}
                <div className={`${styles.content} card-content`}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    
                </div>
                <div className="card-action">
                    <a href={url} 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='waves-effect waves-light btn'>

                        Ver noticia completa
                    </a>
                </div>
            </div>
            
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired

}

export default Noticia
