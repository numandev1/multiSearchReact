import { createSelector } from 'reselect';

const SelectLoading = state => state.loading;

export const selectActive = createSelector(
    [SelectLoading],
    loading => loading.active
);

export const selectText = createSelector(
    [SelectLoading],
    loading => loading.text
);