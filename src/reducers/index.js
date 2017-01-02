import { combineReducers } from 'redux';

// importing reducers
import ProductsReducer from './products_reducer';
import CategoriesReducer from './categories_reducer';
import CollectionReducer from './collection_reducer';
import CollectionsReducer from './collections_reducer';
import ActiveCategoryReducer from './active_category_reducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  categories: CategoriesReducer,
  activeCategory: ActiveCategoryReducer,
  collection: CollectionReducer,
  collections: CollectionsReducer
});

export default rootReducer;



