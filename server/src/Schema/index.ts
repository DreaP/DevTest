//Export schema(s)

import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {}
});

const mutations = new GraphQLObjectType({
    name: "mutation",
    fields: {}
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: mutations,
});