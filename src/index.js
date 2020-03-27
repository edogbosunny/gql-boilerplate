import { GraphQLServer } from 'graphql-yoga';
import typeDefs from './typedefs';
import resolvers from './resolvers'


const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: req => ({
        req
    })
})
server.start().then(() => console.log('server started on localhost 4000'));