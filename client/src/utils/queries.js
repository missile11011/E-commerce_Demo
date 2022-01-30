import {gql} from "@apollo/client"

export const QUERY_USER = gql`
	{
		user {
			firstName
			lastName
			email
			orders {
				_id
				purchaseDate
				products {
					_id
					name
					description
					price
					quantity
					image
				}
			}
		}
	}
`;
