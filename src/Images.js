import React from 'react';

const Images = ({ image }) => {
    console.log('desde images', image);
    return (
        <div className="container">
            <img src={image.webformatURL} key={image.id}/>
            <p> {image.tags} </p>
        </div>
    )
}

export default Images;
