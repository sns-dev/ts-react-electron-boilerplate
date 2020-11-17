import isDev from "electron-is-dev";
import url from "url";
import path from "path";

export const formatUrl = (hash: string) => {
  return url.format({
    protocol: isDev ? "http" : "file",
    slashes: true,
    pathname: isDev ? "localhost:3000" : path.join(__dirname, "index.html"),
    hash,
  });
};
