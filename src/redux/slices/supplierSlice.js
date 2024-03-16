import { createSlice } from "@reduxjs/toolkit";
// import {
//   getSupplier,
//   getAllSuppliers,
//   addSupplier,
//   updateSupplier,
// } from "../../api/SupplierApi";
import SupplierData from "../../Data/vendorList.json";

// export const fetchAllSupplier = (payload) => async (dispatch) => {
//   dispatch(getSupplierStart);
//   try {
//     console.log(payload)
//     const data = await getAllSuppliers(payload);
//     dispatch(getSupplierSuccess(data));
//   } catch (error) {
//     dispatch(getSupplierFailure());
//   }
// };

// export const fetchSingleSupplier = (payload) => async (dispatch) => {
//   dispatch(getSupplierStart());
//   try {
//     const data = await getSupplier(payload);
//     dispatch(getSupplierSuccess(data));
//   } catch (error) {
//     dispatch(getSupplierFailure());
//   }
// };

export const SupplierSlice = createSlice({
  name: "Supplier",
  initialState: {
    data: SupplierData,
    loading: false,
  },
  reducers: {
    getSupplierStart: (state) => {
      state.loading = true;
    },
    getSupplierSuccess: (state, action) => {
      state.loading = false;
      state.data = SupplierData.concat(action.payload["Suppliers"]);
    },
    getSupplierFailure: (state) => {
      state.loading = false;
      // Handle failure, e.g., show an error message
    },
    resetSupplier: () => ({
      data:[]
    }),
  },
});

export const { getSupplierStart, getSupplierSuccess, getSupplierFailure, resetSupplier } =
  SupplierSlice.actions;

export default SupplierSlice.reducer;
