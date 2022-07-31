import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { getSeason, getListEpisodesBySeries } from '../../utils/iterarations';


const DropdownEpisodes = ({episodes, serie}) => {
  const seasons = getSeason(episodes, serie);
  const episodesList = getListEpisodesBySeries(episodes, serie);

  const uniqueSeasons = seasons.filter((item,index)=>{
    return seasons.indexOf(item.trim()) === index;
  });

   

  return (
    <div>
      <Accordion defaultActiveKey="0">
        {
          uniqueSeasons.map((itemSeason, index) => (
            <div key={index}>
              <Accordion.Item eventKey={index} className="mb-3">
                <Accordion.Header>Season: {itemSeason}</Accordion.Header>
                <Accordion.Body>
                  <Table striped hover responsive>
                    <thead>
                      <tr>
                        <th style={{ width: '20%'}}>Title</th>
                        <th style={{ width: '10%'}}>Air Date</th>
                        <th style={{ width: '50%'}}>Characters</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          episodesList.map((itemList) => (
                            itemList.season === itemSeason ? 
                            <tr>
                              <td>{itemList.title}</td>
                              <td>{itemList.air_date}</td>
                              <td>
                                {
                                  itemList.characters.map((itemCharacter) => (
                                    <Badge pill bg="success" className='mr-3'> {itemCharacter} </Badge>
                                  ))
                                }
                              </td>
                            </tr>
                              : null
                          ))
                        }
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          ))
        }
      </Accordion>
    </div>
  );
}
export default DropdownEpisodes;
