import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }
  type Author {
    id: ID!
    name: String!
    photo: String
  }
  # A track is a group of Modules that teaches about a specific topic
  type Track {
    "The track's ID"
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }
`;
