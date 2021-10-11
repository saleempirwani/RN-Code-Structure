import axios from 'axios';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './Loading';

class Api {
  constructor() {
    this.object = {
      baseURL: '',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };
  }

  // SESSION IS EXPIRED
  async _sessionExpired() {
    Toast.show('Session Expired');
    await AsyncStorage.removeItem('token_detail');
    await AsyncStorage.removeItem('user_detail');
  }

  // POST REQUEST
  async _post(endpoint, params, is_loading) {
    const token = await AsyncStorage.getItem('token_detail', token);

    // TOKEN IS NULL
    if (!token) {
      this.instance = axios.create({
        ...this.object,
      });

      // TOKEN IS NOT NULL
    } else {
      this.instance = axios.create({
        ...this.object,
        Authorization: `${JSON.parse(token).token_type} ${
          JSON.parse(token).access_token
        }`,
      });
    }

    if (is_loading) {
      Loading.show();
    }

    this.instance
      .post(endpoint, params)
      .then(response => {
        // TURN OFF LOADING
        if (is_loading) {
          Loading.hide();
        }
        // SESSION EXPIRED
        if (response.status === 401) {
          this._sessionExpired();
        }

        // RETURNING DATA TO ACTION (STATE MANAGEMENT)
        return response.data;
      })
      .catch(err => {
        // TURN OFF LOADING
        if (is_loading) {
          Loading.hide();
        }

        // SESSION EXPIRED
        if (err.response.status === 401) {
          this._sessionExpired();
        }

        // RETURNING ERROR TO ACTION (STATE MANAGEMENT)
        return err.response.data;
      });
  }

  // GET REQUEST
  async _get(endPoint, params, is_loading) {
    const token = await AsyncStorage.getItem('token_detail');

    // TOKEN IS NULL
    if (!token) {
      this.instance = axios.create({...this.object});
    }
    // TOKEN IS NOT NULL
    else {
      this.instance = axios.create({
        ...this.object,
        Authorization: `${JSON.parse(token).token_type} ${
          JSON.parse(token).access_token
        }`,
      });
    }

    // TURN ON LOADING
    if (is_loading) {
      Loading.show();
    }
    return this.instance
      .get(endPoint, params)
      .then(response => {
        // TURN OFF LOADER
        if (is_loading) {
          Loading.hide();
        }

        // SESSION EXPIRED
        if (response.status === 401) {
          this._sessionExpired();
        }
        return response.data;
      })
      .catch(err => {
        // TURN OFF LOADER
        if (is_loading) {
          Loading.hide();
        }

        // SESSION EXPIRED
        if (err.response.status === 401) {
          this._sessionExpired();
        }

        // RETURN ERROR TO ACTION (STATE MANAGEMENT)
        return err.response.data;
      });
  }

  // PUT (UPDATE) REQUEST
  async _put(endPoint, params, is_loading) {
    const token = await AsyncStorage.getItem('token_detail');
    // TOKEN IS NULL
    if (!token) {
      this.instance = axios.create({...this.object});
    }
    // TOKEN IS NOT NULL
    else {
      this.instance = axios.create({
        ...this.object,
        Authorization: `${JSON.parse(token).token_type} ${
          JSON.parse(token).access_token
        }`,
      });
    }

    // TURN ON LOADER
    if (is_loading) {
      Loading.show();
    }

    // RETURN DATA TO ACTION (STATE MANAGEMENT)
    return this.instance
      .put(endPoint, params)
      .then(response => {
        // TURN OFF LOADER
        if (is_loading) {
          Loading.hide();
        }

        // SESSION EXPIRED
        if (response.status === 401) {
          this._sessionExpired();
        }
        return response.data;
      })

      .catch(err => {
        // TURN OFF LOADER
        if (is_loading === true) {
          Loading.hide();
        }

        // SESSION EXPIRED
        if (err.response.status === 401) {
          this._sessionExpired();
        }

        // RETURN ERROR TO ACTION (STATE MANAGEMENT)
        return err.response.data;
      });
  }
}

export default new Api();