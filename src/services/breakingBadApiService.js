import axios from 'axios';

const getCharacters = async () => {
  return await axios.get('https://breakingbadapi.com/api/characters')
    .then((response) => {
      return response.data;
      })
    .catch((error) => {
        return error;
      }
    );
}
const getListEpisodes = async () => {
  return await axios.get('https://breakingbadapi.com/api/episodes')
    .then((response) => {
      return response.data;
      })
    .catch((error) => {
        return error;
      }
    );
}

export { getCharacters, getListEpisodes };
