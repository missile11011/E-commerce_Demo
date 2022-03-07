import React, { useState } from "react";
import Address from "../Address";

const ShippingForm = () => {
	return (
		<div>
            <h1>Shipping Address</h1>
			<Address type="shipping"/>
		</div>
	);
};
export default ShippingForm;
