import axios from "axios";

export default axios.create({
  baseURL: "https://kberisa-001-site1.ftempurl.com/api/v1",
  headers: {
    'Content-type': 'application/json',
  }
});
