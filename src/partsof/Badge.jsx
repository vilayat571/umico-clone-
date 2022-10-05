import React from 'react'

function Badge({ title, sitil }) {
    return (
        <span className={sitil}>
            {title}
        </span>
    )
}

export default Badge
