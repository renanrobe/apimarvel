import axios from 'axios';
import { useDispatch } from 'react-redux';

const PUBLIC_KEY = '06b709648cf578703523de07ce9ed46f';
const HASH = '5272778b7e73ae073dea14eb88b9a646';
//&orderBy=name&limit=10

class HttpRequest {
  async Get(urlApi, param = '') {
    try {
      let url = new URL(`https://gateway.marvel.com${urlApi}`)
      url.search = new URLSearchParams({
        ts: 1,
        apikey: PUBLIC_KEY,
        hash: HASH
      })

      const response = await fetch( url ).then(response => response.json())
      .then(data => {
        return data
      });

      return response;
    } catch (error) {
      console.log('err', error)
    }
  }
}

var request = new HttpRequest();
export const Request = async (urlApi, param = {}) => {
    return await request.Get(urlApi, param);
};
