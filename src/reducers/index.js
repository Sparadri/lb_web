import { combineReducers } from 'redux';

// importing reducers
import ProductsReducer from './products_reducer';
import CategoriesReducer from './categories_reducer';
import ActiveCategoryReducer from './active_category_reducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  categories: CategoriesReducer,
  activeCategory: ActiveCategoryReducer
});

export default rootReducer;



