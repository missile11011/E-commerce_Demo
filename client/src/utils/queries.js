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
export const QUERY_PRODUCT = gql`
	query Product($product: String!){
		product(_id: $product)
		{
			_id
			name
			description
			price
			image
			quantity
		}
	}
`;