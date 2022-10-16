import { store } from './store/store';
import { User } from 'firebase/auth';

export type OnAuthNextFnType = (user: User | null) => void;

export type MainCategoryType = 'Men' | 'Women';

export type SubCategoryType = {
  name: string;
  displayName: string;
};

export type DirectoryItemType = {
  id: number;
  mainCategory: MainCategoryType;
  title: SubCategoryType;
  imageUrl: string;
};

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export type CartItem = Product & { qty: number };
export type CategoriesMap = Record<string, Product[]>;
export interface Catalog {
  mainCat: MainCategoryType;
  subCat: SubCategoryType;
  items: Product[];
}
export interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: unknown | null;
}
export interface BaseState {
  // categories: CategoriesState;
  // cart: CartState;
  user: UserState;
}

export type AppDispatch = typeof store.dispatch;
