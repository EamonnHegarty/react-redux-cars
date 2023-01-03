import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //Assumption:
      //action.payload === {name: 'ab', cost:140}
      state.cars.push({
        name: action.payload.changeSearchTerm,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      //Assumption:
      //action.payload === the id of the car we want to remove

      //this method will give you an updated array as it will
      //filter through each car and only return the cars that
      //do not have the id as the one in the payload
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });

      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
