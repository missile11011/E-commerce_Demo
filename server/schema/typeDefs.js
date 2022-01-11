const {gql} = require("apollo-server-express")

const typeDefs = gql`
    type User{
        _id: ID!
        userName: String
        email: String
        password: String
        role: String!
    }
    type Product{
        _id: ID
        name: String!
        description: String!
        price: Float!
        quantity: Int!
        image: [String]
    }
    type Order{
        _id: ID!
        purchaseDate: String
        products: [Product!]!
        status: String!
    }
    type Cart{
        _id: ID!
        products: [Product]
        user: User
    }
    type Query {
        products: [Product]
        product(_id:String!): Product
    }

    type Mutation {
        addProduct(name: String!, description: String!, price: Float!, quantity: Int!, image: [String] ): Product
        productStock(_id: String!, quantity: Int!): Product
        updateProduct(_id: String!, name: String, description: String, price: Float, quantity: Int): Product
        deleteProduct(_id: String!): Product
    }
`

module.exports = typeDefs;