import axios from "axios";

export default axios.create({
  baseURL: "https://campaign.fundall.io/api/v1",
});
