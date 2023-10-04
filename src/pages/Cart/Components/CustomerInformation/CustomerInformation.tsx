import { Button, TextField } from "@mui/material";
import CountrySelect from "../../../../common/Countryselect/CountrySelect";

export const CustomerInformation = () => {
  return (
    <div className="flex flex-col gap-5 flex-1">
      <p className="font-bold text-xl">Customer Information</p>
      <form className="flex flex-col gap-5" noValidate>
        <TextField label="Email" type="email" />
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <TextField className="flex-1" label="Name" type="name" />
          <TextField className="flex-1" label="Last Name" type="last name" />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-lg font-semibold">Shipping Address</p>

          <CountrySelect />
          <TextField
            className="flex-1"
            label="Phone number"
            type="phone number"
          />

          <TextField label="Address" type="address" />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 300, alignSelf: "center" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
