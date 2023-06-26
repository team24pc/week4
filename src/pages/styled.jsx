import S from 'styled-components';

export const Container = S.section`
    margin-top: 50px;
    height: auto;
    margin: 5px;

    .장르 {
        display: flex;

        p {
            padding: 5px;
            border: 1px solid black;
            border-radius: 5px;
            margin: 5px;
        }
    }
`

export const Card = S.div`

    img {
        width: 200px;
        height: auto;
    }
`
