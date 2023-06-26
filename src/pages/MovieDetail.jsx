import * as S from './styled';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const MovieDetail = () => {
    const [getDetail, setGetDetail] = useState({});
    const params = useParams();

    useEffect(() => {
        const dataFetch = async() => {
            const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`)
            const data = await res.json();
            setGetDetail(data.data.movie)
        }
        dataFetch()
    }, [])

    console.log(getDetail)
    return (
        <>
            {getDetail.id !== undefined && (
            <S.Container>
                <img src={getDetail.large_cover_image} />
                <h1>{getDetail.title}</h1>
                <p>출시년도 : {getDetail.year}</p>
                <div className='장르'>
                    {getDetail.genres.map((v, i) => {
                        return (
                            <p key={i}>{v}</p>
                        )
                    })}
                </div>
            </S.Container>
            )}
        </>
    )
}