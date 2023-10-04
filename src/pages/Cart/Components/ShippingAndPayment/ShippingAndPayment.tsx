import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Payment1, Payment2, Payment3 } from "../../../../assets/images";

export const ShippingAndPayment = () => {
  return (
    <div className="flex gap-8 justify-between flex-col md:flex-row">
      <FormControl>
        <FormLabel
          sx={{ fontSize: "22px", fontWeight: "bold", color: "black" }}
          id="demo-radio-buttons-group-label"
        >
          Payment
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <div className="flex flex-col gap-3">
            <div className=" bg-slate-300 p-3 rounded-md">
              <div className="flex justify-between">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Paypal"
                />
                <div>
                  <img src={Payment1} alt="#" />
                </div>
              </div>
              <p className="text-xs font-normal text-[#555555]">
                PayPal is a trusted online payment platform that allows
                individuals and businesses to securely send and receive money
                electronically.
              </p>
            </div>
            <div className=" bg-slate-300 p-3 rounded-md">
              <div className="flex justify-between">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="MasterCard"
                />
                <div>
                  <img src={Payment2} alt="#" />
                </div>
              </div>
              <p className="text-xs font-normal text-[#555555]">
                PayPal is a trusted online payment platform that allows
                individuals and businesses to securely send and receive money
                electronically.
              </p>
            </div>
            <div className=" bg-slate-300 p-3 rounded-md">
              <div className="flex justify-between">
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="BitCoin"
                />
                <div>
                  <img src={Payment3} alt="#" />
                </div>
              </div>
              <p className="text-xs font-normal text-[#555555]">
                PayPal is a trusted online payment platform that allows
                individuals and businesses to securely send and receive money
                electronically.
              </p>
            </div>
          </div>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel
          sx={{ fontSize: "22px", fontWeight: "bold", color: "black" }}
          id="demo-radio-buttons-group-label"
        >
          Shipping
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <div className="flex flex-col gap-3">
            <div className=" bg-slate-300 p-3 rounded-md">
              <div className="flex justify-between">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="AUS"
                />
                <div>
                  <img src={Payment1} alt="#" />
                </div>
              </div>
              <p className="text-xs font-normal text-[#555555]">
                PayPal is a trusted online payment platform that allows
                individuals and businesses to securely send and receive money
                electronically.
              </p>
            </div>
            <div className=" bg-slate-300 p-3 rounded-md">
              <div className="flex justify-between">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="MasterCouriers"
                />
                <div>
                  <img src={Payment2} alt="#" />
                </div>
              </div>
              <p className="text-xs font-normal text-[#555555]">
                PayPal is a trusted online payment platform that allows
                individuals and businesses to securely send and receive money
                electronically.
              </p>
            </div>
            <div className=" bg-slate-300 p-3 rounded-md">
              <div className="flex justify-between">
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="TransCargo"
                />
                <div>
                  <img src={Payment3} alt="#" />
                </div>
              </div>
              <p className="text-xs font-normal text-[#555555]">
                PayPal is a trusted online payment platform that allows
                individuals and businesses to securely send and receive money
                electronically.
              </p>
            </div>
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
};
