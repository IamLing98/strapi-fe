const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "http://18.136.181.250"
    : "http://18.136.181.250";

export default baseApiUrl;
