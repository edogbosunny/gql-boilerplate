export const getHostname = (url) => {
  const hostname = new URL(url).hostname;
  const pathname = new URL(url).pathname;
  return { hostnameUrl: hostname, pathnameUrl: pathname }
}