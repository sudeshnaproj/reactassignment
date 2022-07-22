const initialState = {
  allProduct: [],
  loading: true,
  cart: [],
  category: "",
  firstFilter: true,
  updateProduct: "",
  UserInformation: {},
  PaymentInformation: {},
  DeliveryDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setAllitem": {
      return { ...state, allProduct: action.payload };
    }
    case "setLoading": {
      return { ...state, loading: action.payload };
    }
    case "remove": {
      let updateCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: updateCart };
    }
    case "filterCategory": {
     
      if (state.firstFilter) {
        state.updateProduct = [...state.allProduct];
        state.firstFilter = false;
      }
      if (action.payload === "All") {
        return { ...state, allProduct: state.updateProduct , category: action.payload,};
      } else {
        let filterCat = state.updateProduct.filter(
          (cat) => cat.category === action.payload
        );
        return { ...state, allProduct: filterCat , category: action.payload,};
      }
    }
    case "increaseQt": {
      const findProductIndex = state.cart.findIndex(
        (pro) => pro.id === action.payload
      );

      const findProduct = state.cart[findProductIndex];

      let update = {
        ...findProduct,
        quantity: findProduct.quantity + 1,
      };
      const cartData = [...state.cart];
      cartData[findProductIndex] = update;
      return { ...state, cart: cartData };
    }
    case "decreaseQt": {
      const findProductIndex = state.cart.findIndex(
        (pro) => pro.id === action.payload
      );

      const findProduct = state.cart[findProductIndex];

      let update = {
        ...findProduct,
        quantity: findProduct.quantity - 1,
      };
      const cartData = [...state.cart];
      cartData[findProductIndex] = update;
      return { ...state, cart: cartData };
    }

    case "ADDITEM": {
      let tempId = parseInt(action.payload.id);
      const findProduct = state.cart.find((pro) => pro.id === tempId);
      if (findProduct) {
        let index = state.allProduct.findIndex((pro) => pro.id === tempId);
        const setProduct = state.cart[index];

        const updateWithQuantity = {
          ...setProduct,
          quantity: parseInt(action.payload.quantity),
        };
        const cartData = [...state.cart];
        cartData[index] = updateWithQuantity;
        return { ...state, cart: cartData };
      }
      const setProduct = state.allProduct.find((pro) => pro.id === tempId);
      const updateWithQuantity = {
        ...setProduct,
        quantity: parseInt(action.payload.quantity),
      };
      return { ...state, cart: [...state.cart, updateWithQuantity] };
    }
    case "UserInformation": {
      return { ...state, UserInformation: action.payload };
    }
    case "DeliveryDetails": {
      return { ...state, DeliveryDetails: action.payload };
    }
    case "PaymentInformation": {
      return { ...state, PaymentInformation: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
