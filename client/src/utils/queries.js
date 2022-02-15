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
export const QUERY_PRODUCTS = gql`
	{
		products{
			_id
			name
			description
			price
			quantity
			image
		}
	}
`;