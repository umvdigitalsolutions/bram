const routes = ["", "/about", "/services", "/tools", "/company-data", "/contact"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `https://bramcollp.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
