let cmsAPI = "https://daniell409.sg-host.com/";
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  cmsAPI = "http://personal-blog.local/";
}

export default cmsAPI;
