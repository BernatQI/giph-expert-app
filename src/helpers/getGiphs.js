export const getGiphs = async (category) => {

  const apiKey = '9HUn3UjP2jW75aBkPk9QreJ77lBwbiUR';

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const giphs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return giphs;
}