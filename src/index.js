import { GraphQLServer } from 'graphql-yoga';
import typeDefs from './typedefs';
import resolvers from './resolvers'
import { prisma } from '../generated/prisma-client';


const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: req => ({
        prisma,
        req
    })
})
server.start().then(() => console.log('server started on localhost 4000'));