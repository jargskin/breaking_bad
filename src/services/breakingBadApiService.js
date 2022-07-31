import axios from 'axios';

const getCharacters = async () => {
  try {
    return await axios.get('https://breakingbadapi.com/api/characters')
      .then((response) => {
        return response.data;
        })
  } catch (error) {
    return error.message;
  }
}

const getListEpisodes = async () => {
  try {
    return await axios.get('https://breakingbadapi.com/api/episodes')
      .then((response) => {
        return response.data;
        })
  } catch(error) {
      return error.message;
    }
}

export { getCharacters, getListEpisodes };
