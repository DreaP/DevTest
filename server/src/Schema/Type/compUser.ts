import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const theUser = new GraphQLObjectType({
    name: "companyName",
    fields: () => ({
        id:{type: GraphQLID}, //type objects
        company: {type: GraphQLString},
        companyUserName: {type: GraphQLString},
        password: {type: GraphQLString},
    }),
});