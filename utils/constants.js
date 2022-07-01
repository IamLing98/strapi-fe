const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "http://13.213.71.62:1337"
    : "http://13.213.71.62:1337";

export default baseApiUrl;
