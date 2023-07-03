import { useState, useEffect } from "react";

export default function useFavorite(props, index) {
    const [favData, setFavData] = useState(props);
    const [favolite, setFavolite] = useState(false);
    
    props.map((v, i) => {
        v.fav = false
    })
    // if (index) {
    //     props.map((v, i) => {
    //         if (index === i) {
    //             v.fav = true;
    //         }
    //     })
    // }
    console.log(index)
    return [props];
}