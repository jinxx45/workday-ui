const isAWS = false; // Change to true for AWS

export const API_BASE_URL = isAWS
  ? "http://aws-ip:8080/api"
  : "http://localhost:8080/api";
