import { combineReducers } from 'redux';

// importing reducers
import ProductsReducer    from './products_reducer';
import CategoriesReducer  from './categories_reducer';
import CollectionReducer  from './collection_reducer';
import CollectionsReducer from './collections_reducer';
import ActiveCategoryReducer from './active_category_reducer';
import AuthReducer           from './auth_reducer';

// redux form
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
  products:       ProductsReducer,
  categories:     CategoriesReducer,
  activeCategory: ActiveCategoryReducer,
  collection:     CollectionReducer,
  collections:    CollectionsReducer,
  auth:           AuthReducer,
  form:           FormReducer
});

export default rootReducer;



