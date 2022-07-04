const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "http://18.136.181.250:1337"
    : "http://18.136.181.250:1337";

export default baseApiUrl;
