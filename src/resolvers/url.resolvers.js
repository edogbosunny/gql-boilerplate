import { getHostname } from '../lib/get-url-hostname'

export default {
  Mutation: {
    urlShortner: async (root, args, { prisma }) => {
      const url = args.url.url;


      const alphaNumericGenerator = Math.random().toString(36).slice(2);
      const newUrl = `https://${getHostname(url).hostnameUrl}/${alphaNumericGenerator}`
      const urlExists = await prisma.$exists.url({ oldurl: url });

      if (urlExists) {
        throw new Error('Url already shortened');
      }

      const data = { oldurl: url, newurl: newUrl }
      getHostname(url)

      const dataResponse = await prisma.createUrl(data);
      return dataResponse
    }
  }
}
