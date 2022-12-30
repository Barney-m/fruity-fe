// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import { dispatch } from '../index';

// types
import { Address, DefaultRootStateProps, Products, ProductsFilter } from '@fruity/types/e-commerce';


// products list
export const products: Products[] = [
  {
    id: 1,
    image: 'prod-11.png',
    name: 'Apple Series 4 GPS A38 MM Space',
    brand: 'Apple',
    description: 'Apple Watch SE Smartwatch ',
    about:
      'This watch from Apple is highly known for its features, like you can control your apple smartphone with this watch and you can do everything you would want to do on smartphone',
    quantity: 3,
    rating: 4.0,
    discount: 75,
    offerPrice: 275,
    grade: 'B',
    categories: ['berries', 'melons'],
    colors: ['errorDark', 'errorMain', 'secondaryMain'],
    popularity: 1,
    date: 1,
    created: new Date().toString(),
    isStock: true,
    new: 45
  },
  {
    id: 2,
    image: 'prod-22.png',
    name: 'Boat On-Ear Wireless ',
    brand: 'Boat',
    description: 'Mic(Bluetooth 4.2, Rockerz 450R...',
    about:
      'Boat On-ear wireless headphones comes with bluethooth technology, comes with better sound quality and weighs around 200gm which seems very light when using ',
    quantity: 45,
    rating: 3.5,
    discount: 10,
    offerPrice: 81.99,
    grade: 'A',
    categories: ['tropical'],
    colors: ['primary200', 'successLight', 'secondary200', 'warningMain'],
    popularity: 1,
    date: 1,
    created: new Date().toString(),
    isStock: false,
    new: 40
  },
  {
    id: 3,
    image: 'prod-33.png',
    name: 'Fitbit MX30 Smart Watch',
    brand: 'Fitbit',
    offer: '30%',
    description: '(MX30- waterproof) watch',
    about:
      'Fitbit is well known for making amazing smartwatches and this product is one of them, it is waterproof and battery power can last upto 2 days. Great product for smartwatch lovers',
    quantity: 70,
    rating: 4.5,
    discount: 40,
    salePrice: 85.0,
    offerPrice: 49.9,
    grade: 'C',
    categories: ['citrus', 'stone-fruit'],
    colors: ['primary200', 'primaryDark'],
    popularity: 1,
    date: 1,
    created: new Date().toString(),
    isStock: true,
    new: 35
  },
  {
    id: 4,
    image: 'prod-44.png',
    name: 'Luxury Watches Centrix Gold',
    brand: 'Centrix',
    offer: '30%',
    description: '7655 Couple (Refurbished)...',
    about: 'This product from Centrix is a classic choice who love classical products. It it made of pure gold and weighs around 50 grams',
    quantity: 3,
    rating: 4.0,
    discount: 20,
    salePrice: 36.0,
    offerPrice: 29.99,
    grade: 'A',
    categories: ['melons'],
    colors: ['errorLight', 'warningMain'],
    popularity: 1,
    date: 1,
    created: new Date().toString(),
    isStock: true,
    new: 15
  },
  {
    id: 5,
    image: 'prod-55.png',
    name: 'Canon EOS 1500D 24.1 Digital SLR',
    brand: 'Canon',
    offer: '30%',
    description: 'SLR Camera (Black) with EF S18-55...',
    about:
      'Image Enlargement: After shooting, you can enlarge photographs of the objects for clear zoomed view. Change In Aspect Ratio: Boldly crop the subject and save it with a composition that has impact. You can convert it to a 1:1 square format, and after shooting you can create a photo that will be popular on SNS.',
    quantity: 50,
    rating: 3.5,
    discount: 15,
    salePrice: 15.99,
    offerPrice: 12.99,
    grade: 'C',
    categories: ['citrus'],
    colors: ['warningMain', 'primary200'],
    popularity: 1,
    date: Date.now(),
    created: new Date().toString(),
    isStock: true,
    new: 25
  },
];

// ----------------------------------------------------------------------

const initialState: DefaultRootStateProps['product'] = {
  error: null,
  products: [],
  allProducts: [],
  product: null,
  relatedProducts: [],
  reviews: [],
  addresses: []
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET PRODUCTS
    getProductsSuccess(state, action) {
      state.products = action.payload;
      state.allProducts = action.payload;
    },

    // FILTER PRODUCTS
    filterProductsSuccess(state, action) {
      state.products = action.payload;
    },

    // GET PRODUCT
    getProductSuccess(state, action) {
      state.product = action.payload;
    },

    // GET RELATED PRODUCTS
    getRelatedProductsSuccess(state, action) {
      state.relatedProducts = action.payload;
    },

    // GET PRODUCT REVIEWS
    getProductReviewsSuccess(state, action) {
      state.reviews = action.payload;
    },

    // GET ADDRESSES
    getAddressesSuccess(state, action) {
      state.addresses = action.payload;
    },

    // ADD ADDRESS
    addAddressSuccess(state, action) {
      state.addresses = action.payload;
    },

    // EDIT ADDRESS
    editAddressSuccess(state, action) {
      state.addresses = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getProducts() {
  return () => {
    try {
      dispatch(slice.actions.getProductsSuccess(products));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function filterProducts(products: Products[]) {
  return () => {
    try {
      dispatch(slice.actions.filterProductsSuccess(products));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getProduct(id: number | undefined) {
  return () => {
    try {
      dispatch(slice.actions.getProductSuccess(products.find((product) => product.id === id)));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getRelatedProducts(id: string | undefined) {
  return () => {
    try {
      dispatch(slice.actions.getRelatedProductsSuccess(id));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getProductReviews(id: string | undefined) {
  return () => {
    try {
      dispatch(slice.actions.getProductReviewsSuccess(id));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getAddresses(id: string | undefined) {
  return () => {
    try {
      dispatch(slice.actions.getAddressesSuccess([]));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function addAddress(address: Address) {
  return () => {
    try {
      dispatch(slice.actions.addAddressSuccess(address));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function editAddress(address: Address) {
  return () => {
    try {
      dispatch(slice.actions.editAddressSuccess(address));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
