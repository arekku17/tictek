import React from 'react'

const TitleSection = (props) => {
    return (
        <div className="sectionTitle">
            <p className="title">
               {props.title}
            </p>
            <p className="description">
                {props.description}
            </p>
        </div>
    )
}

export default TitleSection