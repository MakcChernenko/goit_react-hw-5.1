import axios from "axios";

const servise = async (query, isDetails = false) => {
  const apiKey = "22a104e4";

  let url;
  if (isDetails) {
    url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${query}&plot=full&r=json`;
  } else {
    url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&r=json`;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from OMDB:", error);
    return { Error: "An error occurred" };
  }
};

export default servise;
