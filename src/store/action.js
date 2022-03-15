import axios from "axios"

const headers = {
    'Content-Type': 'application/json',
    'trakt-api-version': 2,
    'trakt-api-key': 'd2f14e094e4a30e45bd62b38b8a05bc96ccefbd5d5e35e77557e1042a2f9325e'
};

export const getMovieList = (page = 1) => ({
    type: 'MOVIE_LIST',
    payload: axios.get(`https://api.trakt.tv/movies/trending?page=${page}`, {headers}),
})

export const loadingMoreMovie = () => ({
    type: 'LOAD_MORE_MOVIES',
})