import axios from "axios";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = 'xHQMXk-2rSOs0u_-QUYcIzEDDGqDec1Zdi4CqTB4PVM';

export const fetchImages = async (query, page = 1, per_page = 16) => {
    try {
      const response = await axios.get('search/photos', {
        params: {
          query,
          page,
          per_page,
          client_id: ACCESS_KEY,
        },
      });
  
      const totalPages = response.data.total_pages;
      const images = response.data.results;
  
      return { images, totalPages };
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again.');
      throw error;
    }
  };