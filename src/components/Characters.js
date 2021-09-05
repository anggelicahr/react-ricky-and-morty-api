import React from 'react';

const Characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card">
                            <img src={item.image} alt="" />
                            <div className="card-bady">
                                <h5 className="card-title">{item.name}</h5>
                                <p>Specie: {item.species}</p>
                                <p>Location: {item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters;
