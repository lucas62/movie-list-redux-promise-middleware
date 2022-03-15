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

    expect(getByTestId('movie-list'));
});

test('render message that no results found if empty array returned', () => {
    const store = createStore(movieReducer, applyMiddleware(promise));

    const { getByTestId } = render(
        <Provider store={store}>
            <MovieList />
        </Provider>
    )
    
    waitFor(() => {
        return getByTestId('no-results');
    });
  
      expect(getByTestId('no-results'));
});