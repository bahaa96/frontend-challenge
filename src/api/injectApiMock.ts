import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import { configure } from 'axios-hooks';


const normalAxios = axios.create();
const mockAxios = axios.create();
configure({ axios: mockAxios })

const mock = new MockAdapter(mockAxios);

let count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=login,name,picture&noinfo`;

let db = {
  data: null,
};



mock.onGet("/employees").reply(async () => {
  try {
    const storedDBString = await localStorage.getItem('db')
    if (storedDBString) {
      const storedDB = JSON.parse(storedDBString);;
      if (storedDB) {
        return [200, storedDB.data]
      }
    }
    const res = await normalAxios.get(fakeDataUrl);
    if (res) {
      db = { ...db, data: res.data.results}
      await localStorage.setItem('db', JSON.stringify(db))
    }
    return [200, db.data]
  }
  catch(e) {
    console.log('error: ', e.response);
    throw new Error(e)
  }
});



mock.onPatch("/employees/:employee_id").reply(200, { });

