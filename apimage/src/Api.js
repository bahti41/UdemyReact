import axios from "axios";

const searchImages = async (names) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 3gchUVXnEbxLdIFMX6X3ehjPyanG_wLWTL_tKBkTLVI",
    },
    params: {
      query: names,
    },
  });
  return response.data.results;
};

export default searchImages;
