import React from "react";
import { render, waitFor } from '@testing-library/react-native';

import MovieList from "../../src";

import { Provider } from 'react-redux'
import promise from "redux-promise-middleware";
import { applyMiddleware, createStore } from "redux";
import movieReducer from "../store/reducer";


test('check if show movie list', () => {
    const store = createStore(movieReducer, applyMiddleware(promise));

    const { getByTestId } = render(
        <Provider store={store}>
            <MovieList />
        </Provider>
    )

    const movieList = getByTestId('movie-list')

    expect(movieList).toBeTruthy();
});
