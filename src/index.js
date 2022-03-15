import { Text } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieList, loadingMoreMovie } from './store/action';
import {
    Container,
    MovieFlatList,
} from './styles';
import FooterList from './components/FooterList';
import CardMovie from './components/CardMovie';
import EmptyMessage from './components/EmptyMessage';

export default function MovieList() {
    const dispatch = useDispatch();
    const movieData = useSelector(state => state)
    
    useEffect(() => {
        dispatch(getMovieList())
    }, []);
    
    return (
        <Container>
            <MovieFlatList 
                testID="movie-list"
                data={movieData.data}
                renderItem={({ item, index }) => (
                    <CardMovie 
                        testID={`movie-row-${index}`}
                        title={item.movie.title} 
                        year={item.movie.year}
                        watchers={item.watchers}
                    />
                )}
                keyExtractor={(item, index) => index}
                onEndReached={() => {
                    dispatch(getMovieList(Number(movieData.currentPage) + 1), loadingMoreMovie())
                }}
                onEndReachedThreshold={0.2}
                ListFooterComponent={() => <FooterList loadingFooter={!movieData.loadingMoreData && !movieData.pedding}/>}
                refreshing={movieData.pedding && movieData.loadingMoreData}
                onRefresh={() => dispatch(getMovieList(1))}
                ListEmptyComponent={() => {
                    if (movieData.pedding) {
                        return <Text testID="loading-message">Loading</Text>;
                    }
                
                    return <EmptyMessage
                    loading={!movieData.pedding && !movieData.loadingMoreData}
                    testID={'no-results'} 
                    message={'Desculpe, não foi possível listar os filmes!'}/>
                }}
            />
        </Container>
    )
}