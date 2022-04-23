import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_SUCCESS } from "../types";

const login = (params, setLocalLoading, navigation) => async (dispatch) => {
  setLocalLoading(true);
  try {
    const response = await axios.post(endPoint, params);
    if (response?.status === 200) {
      const data = response?.data?.data;
      await AsyncStorage.setItem("userData", JSON.stringify(data));
      dispatch({
        type: AUTH_SUCCESS,
        payload: data,
      });
      navigation();
    }
  } catch (error) {
    console.log("ERR [login] ====================> ", error.message);
  }
};

export default {
  login,
};
