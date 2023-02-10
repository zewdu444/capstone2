/* eslint-disable */
 
const getAllShows = async (baseURL) => {
  
  try {
    const result = await fetch(baseURL);
    if (!result.ok) throw new Error(`Error fetching item data: ${result.status}`); 
      const data = await result.json();
      const datalength = data.length;
      const realityGenre = data.filter((show) => show.type === 'Reality');
      const realityLength = realityGenre.length;
      const animationGenre = data.filter((show) => show.type === 'Animation');
      const animationLength = animationGenre.length;
      return [{ title: 'Shows', data, total: datalength }, { title: 'Reality', realityGenre, total: realityLength }, { title: 'Animation', animationGenre, total: animationLength }]; 
  } catch (error) {
    throw new Error();
  }
};

export default getAllShows; 