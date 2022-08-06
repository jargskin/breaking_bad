import axios from 'axios';
const urlBase = 'https://breakingbadapi.com/api/'

const getCharacters = async () => {
  try {
    return await axios.get(`${urlBase}characters`)
      .then((response) => {
        return response.data;
        })
  } catch (error) {
    return error.message;
  }
}

const getListEpisodes = async () => {
  try {
    return await axios.get(`${urlBase}episodes`)
      .then((response) => {
        return response.data;
        })
  } catch(error) {
      return error.message;
    }
}

export { getCharacters, getListEpisodes };
