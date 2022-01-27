const {gql} = require("apollo-server-express")

const typeDefs = gql`
    type User{
        _id: ID!
        email: String
        firstName: String
        lastName: String
        password: String
        role: String
        orders:Order
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
        _id: ID
        products: [Product]
        user: User
    }
    type Auth{
        token: ID
        user: User
    }
    type Query {
        products: [Product]
        product(_id:String!): Product
        user: User
    }

    type Mutation {
        addProduct(name: String!, description: String!, price: Float!, quantity: Int!, image: [String] ): Product
        productStock(_id: String!, quantity: Int!): Product
        updateProduct(_id: String!, name: String, description: String, price: Float, quantity: Int): Product
        deleteProduct(_id: String!): Product
        createUser(email: String!, firstName: String, lastName: String, password: String!):Auth
        login(email: String!, password: String!):Auth
    }
`

module.exports = typeDefs;