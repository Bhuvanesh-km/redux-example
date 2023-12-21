import UserSlice from "../UserSlice";
const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export const fetchUserMiddleWare = () => {
  const actions = UserSlice.actions;
  return async (dispatch) => {
    try {
      //handle loading
      dispatch(actions.showloading);
      const resp = await fetch(USER_ENDPOINT);
      const users = await resp.json();
      console.log(users);
      dispatch(actions.setUserData(users));
      //handle success
    } catch (err) {
      //handle error
      dispatch(actions.showError(err.getMessage));
    }
  };
};
