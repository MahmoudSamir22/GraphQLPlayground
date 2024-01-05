export const typeDefs = `#graphql
type Game {
    id: ID!,
    title: String!,
    platform: [String!]!
    reviews: [Review!]
}
type Review {
    id: ID!,
    rating: Int!,
    content: String!,
    game: Game!,
    author: Author!
}
type Author {
    id: ID!,
    name: String!,
    verfiied: Boolean!,
    reviews: [Review!]
}
type Query {
    reviews: [Review],
    review(id: ID!): Review,
    games: [Game],
    game(id: ID): Game,
    authors: [Author]
    author(id: ID): Author
}
`;
// ! means it's required
// int, float, string, boolean, ID