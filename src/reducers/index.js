import { combineReducers } from 'redux';

import ProductsReducer from './products_reducer';
import FiltersReducer from './filters_reducer';
import ActiveFilterReducer from './active_filter_reducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  filters: FiltersReducer,
  activeFilter: ActiveFilterReducer
});

export default rootReducer;
