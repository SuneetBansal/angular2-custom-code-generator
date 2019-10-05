// lib imports
import { createFeatureSelector, createSelector } from '@ngrx/store';

// custom imports
import * as <%= dasherize(name) %> from './<%= dasherize(name) %>-reducer';
import { State } from '../interface';

export const reducers = {
    <%= dasherize(name) %>: <%= dasherize(name) %>.reducer
};

export const <%= dasherize(name) %>FeatureSelector = createFeatureSelector<State>('<%= dasherize(name) %>');

const getObjectAvailabilityDetail = state => state.objectAvailabilityDetail;
export const <%= dasherize(name) %>AccessStateSelector = createSelector(<%= dasherize(name) %>FeatureSelector, s => s.<%= dasherize(name) %>.<%= dasherize(name) %>AccessState);
export const <%= dasherize(name) %>ObjectAvailabilityDetailSelector = createSelector(<%= dasherize(name) %>AccessStateSelector, getObjectAvailabilityDetail);
