import {typeDefs} from './typedefs/index'
import * as resolvers from './resolvers/index'
import { buildFederatedSchema } from '@apollo/federation'

export default buildFederatedSchema({
    typeDefs: typeDefs(),
    resolvers: resolvers
})

