import axios from 'axios';

const api = () => axios({
  method: 'get',
  url: 'https://graphnet-api-nonprod.azure-api.net/acute/patients/2188/diagnoses-summary',
  headers: {
    'Ocp-Apim-Subscription-Key': 'keyHere',
    'Authorization': 'tokenHere',
  },
})
  .then((response) => { console.log('response', response); })
  .catch((err) => { console.log('response', err); });

export const getGpRecords = () => {
  return axios.get('https://nhs.hack.cat/.netlify/functions/gp-encounters')
}

export default api;
