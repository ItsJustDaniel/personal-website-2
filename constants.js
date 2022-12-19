let cmsAPI = "https://daniell409.sg-host.com/";

if (process.env.NODE_ENV) {
  cmsAPI = "http://personal-blog.local/";
}

export default cmsAPI;
