import displaySplice from './displayReducer';
import { combineSlices } from '@reduxjs/toolkit';
import valuesSlice from './valuesReducer';
import keySlice from './keyReducer';

const rootReducer = combineSlices({
    values: valuesSlice.reducer,
    display: displaySplice.reducer,
    key: keySlice.reducer
})

export default rootReducer;