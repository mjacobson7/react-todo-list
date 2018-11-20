import React from 'react';

const CompletedList = (props) => {

    const completedItemList = props.completedList.map((item, i) => {
        return (
            <p key={i}>
                <strike>{item}</strike>
            </p>
        )
    })

    return (
        <div>
            <h1>Completed List</h1>
            <ul>{completedItemList}</ul>
        </div>

    )
}

export default CompletedList;