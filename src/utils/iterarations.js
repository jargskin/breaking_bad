

const getListEpisodesBySeries = (obj, serie) => {
  const OrderedList = obj.filter((item) => item.series === serie);
  return OrderedList;
}

const getSeason = (obj, serie) => {
  const Seasons = getListEpisodesBySeries(obj, serie).map((item) => item.season);
  return Seasons;
}



export { getSeason, getListEpisodesBySeries };