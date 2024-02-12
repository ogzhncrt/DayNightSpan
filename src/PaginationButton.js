//import { useState,useEffect } from 'react';

export const PaginationButton = (props) => {
    return (
        props.pageUrl &&
        (
            <button data-page={props.pageUrl} onClick={props.newPageRequested}>
                {props.pageLabel}
            </button>
        )
    )
}



