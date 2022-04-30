import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;
export const CREATEUSER = gql`
	mutation createUser($email: String!, $password: String!, $firstName: String!, $lastName: String!){
		createUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName){
			token
			user{
				_id
			}
		}
	}
`;
