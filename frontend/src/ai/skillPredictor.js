import axios from "axios";

const API_URL = "http://localhost:5000";

export async function predictSkills(data) {
  try {

    const response = await axios.post(`${API_URL}/predict`, data,{timeout: 10000});

    return response.data;

  } catch (error) {

    console.error("API Error:", error);
    throw error;

  }
}