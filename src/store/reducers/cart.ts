// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import { dispatch } from '@fruity/store/index';

// types
import { Address, CartProductStateProps, CartStateProps, DefaultRootStateProps, ProductCardProps } from '@fruity/types/cart';
import { Products, ProductStateProps } from '@fruity/types/e-commerce';
import { cloneDeep } from 'lodash';

// ----------------------------------------------------------------------

const initialState: DefaultRootStateProps['cart'] = {
  error: null,
  checkout: {
    step: 0,
    products: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null,
    payment: {
      type: 'free',
      method: 'card',
      card: ''
    }
  }
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // ADD PRODUCT
    addProductSuccess(state, action) {
      state.checkout.products = action.payload;
      const subtotal = action.payload?.reduce((acc: number, cur: CartProductStateProps) =>  
                        acc + (Number(cur.offerPrice ? cur.offerPrice : (cur.salePrice ?? 0)) * (cur.quantity ?? 1)), 0);
      state.checkout.subtotal = subtotal;
      state.checkout.total = state.checkout.subtotal;
    },

    // REMOVE PRODUCT
    removeProductSuccess(state, action) {
      state.checkout.products = action.payload;
      const subtotal = action.payload?.reduce((acc: number, cur: CartProductStateProps) =>  
                        acc + (Number(cur.offerPrice ? cur.offerPrice : (cur.salePrice ?? 0)) * (cur.quantity ?? 1)), 0);
      state.checkout.subtotal = subtotal;
      state.checkout.total = state.checkout.subtotal;
    },

    // UPDATE PRODUCT
    updateProductSuccess(state, action) {
      state.checkout.products = action.payload;

      const subtotal = action.payload?.reduce((acc: number, cur: CartProductStateProps) =>  
                        acc + (Number(cur.offerPrice ? cur.offerPrice : (cur.salePrice ?? 0)) * (cur.quantity ?? 1)), 0);

      state.checkout.subtotal = subtotal;
      state.checkout.total = state.checkout.subtotal;
    },

    // SET STEP
    setStepSuccess(state, action) {
      state.checkout.step = action.payload;
    },

    // SET NEXT STEP
    setNextStepSuccess(state, action) {
      state.checkout.step += 1;
    },

    // SET BACK STEP
    setBackStepSuccess(state, action) {
      state.checkout.step -= 1;
    },

    // SET BILLING ADDRESS
    setBillingAddressSuccess(state, action) {
      state.checkout.billing = action.payload.billing;
    },

    // SET DISCOUNT
    setDiscountSuccess(state, action) {
      let difference = 0;
      if (state.checkout.discount > 0) {
        difference = state.checkout.discount;
      }

      state.checkout.discount = action.payload.amount;
      state.checkout.total = state.checkout.total + difference - action.payload.amount;
    },

    // SET SHIPPING CHARGE
    setShippingChargeSuccess(state, action) {
      state.checkout.shipping = action.payload.shipping;
      state.checkout.total += action.payload.newShipping;
      state.checkout.payment = {
        ...state.checkout.payment,
        type: action.payload.type
      };
    },

    // SET PAYMENT METHOD
    setPaymentMethodSuccess(state, action) {
      state.checkout.payment = {
        ...state.checkout.payment,
        method: action.payload.method
      };
    },

    // SET PAYMENT CARD
    setPaymentCardSuccess(state, action) {
      state.checkout.payment = {
        ...state.checkout.payment,
        card: action.payload.card
      };
    },

    // RESET CART
    resetCardSuccess(state, action) {
      state.checkout = initialState.checkout;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function addProduct(product: ProductCardProps, cartProducts: CartProductStateProps[]) {
  return () => {
    try {
      let productExist = false;
      const tmpCartProducts = cloneDeep(cartProducts);

      for (const x of tmpCartProducts) {
        if (product.id === x.id) {
          x.quantity += 1;
          productExist = true;
          break;
        }
      }

      if (!productExist) {
        tmpCartProducts.push(product as CartProductStateProps);
      }

      dispatch(slice.actions.addProductSuccess(tmpCartProducts));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function removeProduct(id: string | number | undefined, cartProducts: CartProductStateProps[]) {
  return () => {
    try {
      const products = cloneDeep(cartProducts);

      dispatch(slice.actions.removeProductSuccess(products.filter((product: CartProductStateProps) => product.id !== Number(id))));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function updateProduct(id: string | number | undefined, quantity: number, products: CartProductStateProps[]) {
  return () => {
    try {
      let tmpProducts = cloneDeep(products);
      for (const x of tmpProducts) {
        if (x.id === Number(id)) {
          x.quantity = quantity;
          break;
        }
      }

      dispatch(slice.actions.updateProductSuccess(tmpProducts));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function setStep(step: number) {
  return () => {
    dispatch(slice.actions.setStepSuccess(step));
  };
}

export function setNextStep() {
  return () => {
    dispatch(slice.actions.setNextStepSuccess({}));
  };
}

export function setBackStep() {
  return () => {
    dispatch(slice.actions.setBackStepSuccess({}));
  };
}

export function setBillingAddress(address: Address | null) {
  return () => {
    try {
      dispatch(slice.actions.setBillingAddressSuccess(address));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function setDiscount(code: string, total: number) {
  return () => {
    try {
      dispatch(slice.actions.setDiscountSuccess(code));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function setShippingCharge(charge: string, shipping: number) {
  return () => {
    try {
      dispatch(slice.actions.setShippingChargeSuccess(charge));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function setPaymentMethod(method: string) {
  return () => {
    try {
      dispatch(slice.actions.setPaymentMethodSuccess(method));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function setPaymentCard(card: string) {
  return () => {
    try {
      dispatch(slice.actions.setPaymentCardSuccess(card));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function resetCart() {
  return () => {
    try {
      dispatch(slice.actions.resetCardSuccess("true"));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
