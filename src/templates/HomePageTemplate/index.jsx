import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';
import Banner from '../../components/Banner';
import Cards from '../../components/Cards';
import DropdownEpisodes from '../../components/DropdownEpisodes';

import { getCharacters, getListEpisodes } from '../../services/breakingBadApiService';
import './templateHome.scss';

const HomePageTemplate = () => {
  const [characters, setCharacters] = useState();
  const [episodes, setEpisodes] = useState();
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      const resultCharacters = await getCharacters();
      const resultEpisodes = await getListEpisodes();
      if (resultCharacters && resultEpisodes) {
        setCharacters(resultCharacters);
        setEpisodes(resultEpisodes);
        setLoading(false);
      }
    })();
  }, []);
  const fistSerie = 'Breaking Bad';
  const secondSerie = 'Better Call Saul';
  
  return (
    <>
      <Banner />
      { isLoading 
        ? 
          <ReactLoading type='spinningBubbles' color='green' className='mx-auto my-5' /> 
        : 
          <>
            <section>
              <div className="background-gray">
                <div className="container card-container">
                  <h2 className='pt-5 pb-4 title-section'>Characters</h2>
                    <Cards data={characters} />
                </div>
              </div>
            </section>
            <section>
              <div className="container-episodes">
                <div className="container">
                  <h2 className='pt-5 pb-4 title-section'>List of Episodes</h2>
                  <DropdownEpisodes episodes={episodes} serie={fistSerie} />
                </div>
              </div>
            </section>
            <section>
              <div className="container-episodes background-gray pb-5">
                <div className="container">
                  <h2 className='pt-5 pb-4 title-section'>Related Series</h2>
                  <DropdownEpisodes episodes={episodes} serie={secondSerie} />
                </div>
              </div>
            </section>
          </> 
      }
    </>
 )
}
export default HomePageTemplate;
