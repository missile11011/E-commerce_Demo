import React from "react";

const Address = () => {
	return (
		<form>
			<div class="row mb-4">
				<div class="col">
					<div class="form-outline">
						<input
							type="text"
							id="form7Example1"
							class="form-control"
						/>
						<label class="form-label" for="form7Example1">
							First name
						</label>
					</div>
				</div>
				<div class="col">
					<div class="form-outline">
						<input
							type="text"
							id="form7Example2"
							class="form-control"
						/>
						<label class="form-label" for="form7Example2">
							Last name
						</label>
					</div>
				</div>
			</div>

			<div class="form-outline mb-4">
				<input type="text" id="form7Example3" class="form-control" />
				<label class="form-label" for="form7Example3">
					Company name
				</label>
			</div>

			<div class="form-outline mb-4">
				<input type="text" id="form7Example4" class="form-control" />
				<label class="form-label" for="form7Example4">
					Address
				</label>
			</div>

			<div class="input-group row mb-4">
				<div class="col">
					<select class="form-control">
						<option selected>- Select -</option>
						<option value="APT">APT - Apartment</option>
						<option value="BSMT">BSMT - Basement</option>
						<option value="BLDG">BLDG - Building</option>
						<option value="DEPT">DEPT - Department</option>
						<option value="FL">FL - Floor</option>
						<option value="FRNT">FRNT - Front</option>
						<option value="HNGR">HNGR - Hanger</option>
						<option value="KEY">KEY - Key</option>
						<option value="LBBY">LBBY - Lobby</option>
						<option value="LOT">LOT - Lot</option>
						<option value="LOWR">LOWR - Lower</option>
						<option value="OFC">OFC - Office</option>
						<option value="OTHER">Other</option>
						<option value="PH">PH - Penthouse</option>
						<option value="PIER">PIER - Pier</option>
						<option value="REAR">REAR - Rear</option>
						<option value="RM">RM - Room</option>
						<option value="SIDE">SIDE - Side</option>
						<option value="SLIP">SLIP - Slip</option>
						<option value="SPC">SPC - Space</option>
						<option value="STOP">STOP - Stop</option>
						<option value="STE">STE - Suite</option>
						<option value="TRLR">TRLR - Trailer</option>
						<option value="UNAVAILABLE">Unable to determine</option>
						<option value="UNIT">UNIT - Unit</option>
						<option value="UPPR">UPPR - Upper</option>
					</select>

					<label class="form-label" for="apt-suite-other">
						Unit type
					</label>
				</div>
                <div class="col">
				<input class="form-control"></input>
                <label class="form-label" for="">unit number</label>
			</div>
			</div>
			

			<div class="form-outline mb-4 row">
				<div class="col inline-block">
					<input class="form-control" type="text" id="city"></input>
					<label class="form-label">City</label>
				</div>
				<div class="col">
					<input class="form-control" type="text"></input>
					<label class="form-label">state</label>
				</div>
			</div>
			<div class="form-outline mb-4">
				<input type="email" id="form7Example5" class="form-control" />
				<label class="form-label" for="form7Example5">
					Email
				</label>
			</div>
			<div class="form-outline mb-4">
				<input type="number" id="form7Example6" class="form-control" />
				<label class="form-label" for="form7Example6">
					Phone
				</label>
			</div>
		</form>
	);
};

export default Address;
