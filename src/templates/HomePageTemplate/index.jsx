import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';
import Banner from '../../components/Banner';
import Cards from '../../components/Cards';
import DropdownEpisodes from '../../components/DropdownEpisodes';
import ScrollToTop from '../../components/ScrollToTop';

import { getCharacters, getListEpisodes } from '../../services/breakingBadApiService';
import './templateHome.scss';

const HomePageTemplate = ({ objRef, scroll }) => {
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
      <section>
        <div className="container my-5 fade-in">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div className="well quoteWell background-gray">
                <i className="fa fa-quote-left fa-3x"></i> 
                <blockquote>
                  <p className="quote lead">A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.</p>
                  <footer><cite className="author" title="author">Imdb</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      { isLoading 
        ? 
          <ReactLoading type='spinningBubbles' color='green' className='mx-auto my-5' /> 
        : 
          <>
            <section ref={objRef.characterRef}>
              <div className="background-gray">
                <div className="container card-container">
                  <h2 className='pt-5 pb-4 title-section'>Characters</h2>
                    <Cards data={characters} />
                </div>
              </div>
            </section>
            <section ref={objRef.episodesRef}>
              <div className="container-episodes">
                <div className="container">
                  <h2 className='pt-5 pb-4 title-section'>List of Episodes</h2>
                  <DropdownEpisodes episodes={episodes} serie={fistSerie} />
                </div>
              </div>
            </section>
            <section  ref={objRef.episodesRelatedRef}>
              <div className="container-episodes background-gray pb-5">
                <div className="container">
                  <h2 className='pt-5 pb-4 title-section'>Related Series</h2>
                  <DropdownEpisodes episodes={episodes} serie={secondSerie} />
                </div>
              </div>
            </section>
          </> 
      }
      <ScrollToTop />
    </>
 )
}
export default HomePageTemplate;
