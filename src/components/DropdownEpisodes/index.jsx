import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

const DropdownEpisodes = (episodes) => {
  const seasons = episodes.episodes.map((item) => item.season);

  const uniqueSeasons = seasons.filter((item,index)=>{
    return seasons.indexOf(item.trim()) === index;
  });

  const breakingBadList = episodes.episodes.filter((item) => item.series === 'Breaking Bad'); 

  return (
    <div>
      <Accordion defaultActiveKey="0">
        {
          uniqueSeasons.map((itemSeason, index) => (
            <div key={index}>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>Season: {itemSeason}</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Air Date</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          breakingBadList.map((itemList, index) => (
                            itemList.season === itemSeason ? 
                            <tr>
                              <td></td>
                              <td>{itemList.title}</td>
                              <td>{itemList.air_date}</td>
                              <td>
                                {
                                  itemList.characters.map((itemCharacter, index) => (
                                    <ul>
                                      <li>{itemCharacter}</li>
                                    </ul>
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
