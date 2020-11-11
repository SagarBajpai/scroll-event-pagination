import axios from "axios";
import { GET_IMAGES } from "./Enpoints";

/**
 *
 * @param {number} offset  // Offset to set the pagination
 */
export const fetchImages = async (offset = 1) => {
  try {
    const res = await axios.get(`${GET_IMAGES}page=${offset}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
