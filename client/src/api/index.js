import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchAgency = async () => {
  try {
    const res = await API.get("/:user");
    // console.log(res.data.agencies);
    return res.data.agencies;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBrand = async (id) => {
  try {
    const response = await API.get(`/:agencyName/${id}`);
    console.log(response);
    return response.data.brands;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProject = async (brandName) => {
  try {
    const res = await API.get("/agency/:id/listing/:brandName");
    console.log(res);
    return res.data.projects;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreative = async () => {
  try {
    const res = await API.get("/agency/:id/listing/:brandname/:projectname");
    return res.data.creatives;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (data) => {
  try {
    const res = await API.post("/login", data);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
