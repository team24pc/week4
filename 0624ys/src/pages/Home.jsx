import * as S from './styled';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// https://yts.mx/api/v2/movie_details.json?movie_id=1234
export const Home = () => {
    const [getData, setGetData] = useState([]);
    useEffect(() => {
        const dataFetch = async() => {
            const res = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=download_count`);
            const data = await res.json();
            const movies = await data.data.movies;
            setGetData(movies);
    }
        dataFetch();
    }, [])
    console.log(getData)
    return (
        <S.Container>
            <h1>MovieHome</h1>
            {getData.map((v, i) => {
                return (
                    <S.Card key={i}>
                        <Link to={`/detail/${v.id}`}>
                            <img src={v.large_cover_image}/>
                            <p>{v.title}</p>
                        </Link>
                    </S.Card>
                )
            })}
        </S.Container>
    )
}