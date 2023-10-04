import { Box, Button, Tab, TextField } from "@mui/material";
import { ComponentRecommendation } from "../../common/ComponentRecommendation/ComponentRecommendation";
import { useAppSelector } from "../../redux/hooks/ToolkitHooks";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { OrderSummaryBox } from "./Components/OrderSummaryBox/OrderSummaryBox";
import { OrderedCards } from "./Components/OrderedCards/OrderedCards";
import React from "react";
import CountrySelect from "../../common/Countryselect/CountrySelect";

export const Cart = () => {
  const CartData = useAppSelector((state) => state.Favorites.favoritesData);

  const CartArr = CartData.filter((card) => card.cart);

  const length = CartArr.length;

  const totalAmount = CartArr.reduce(
    (total, card) => total + card.price * card.amount,
    0
  );

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-5 md:p-[50px] justify-between xl:p-[90px] gap-8">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={false}
              textColor="primary"
              centered
              aria-label="lab API tabs example"
            >
              <Tab label="Cards" value="1" />
              <Tab label="Customer Info" value="2" />
              <Tab label="Shipping & Payment" value="3" />
              <Tab label="Product Confirmation" value="4" />
            </TabList>
          </Box>
          <TabPanel
            className="flex flex-col lg:flex-row justify-between gap-8"
            value="1"
          >
            <OrderedCards length={length} CartArr={CartArr} />
            <OrderSummaryBox totalAmount={totalAmount} />
          </TabPanel>
          <TabPanel className="flex gap-8 flex-col lg:flex-row" value="2">
            <div className="flex flex-col gap-5 flex-1">
              <p className="font-bold text-xl">Customer Information</p>
              <form className="flex flex-col gap-5" noValidate>
                <TextField label="Email" type="email" />
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <TextField className="flex-1" label="Name" type="name" />
                  <TextField
                    className="flex-1"
                    label="Last Name"
                    type="last name"
                  />
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
                <Button type="submit" variant="contained" color="primary" sx={{width:300, alignSelf:"center"}} >Submit</Button>
              </form>
            </div>
            <OrderSummaryBox totalAmount={totalAmount} />
          </TabPanel>
          <TabPanel value="3">
           
          </TabPanel>
          <TabPanel value="4">Item Three</TabPanel>
        </TabContext>
      </div>
      <ComponentRecommendation />
    </div>
  );
};
