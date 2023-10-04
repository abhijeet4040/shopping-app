import { Box, Tab } from "@mui/material";
import { ComponentRecommendation } from "../../common/ComponentRecommendation/ComponentRecommendation";
import { useAppSelector } from "../../redux/hooks/ToolkitHooks";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { OrderSummaryBox } from "./Components/OrderSummaryBox/OrderSummaryBox";
import { OrderedCards } from "./Components/OrderedCards/OrderedCards";
import React from "react";
import { CustomerInformation } from "./Components/CustomerInformation/CustomerInformation";
import { ShippingAndPayment } from "./Components/ShippingAndPayment/ShippingAndPayment";
import { Confirmation } from "./Components/Confirmation/Confirmation";

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
      <div className="flex flex-col p-5 md:p-[50px] justify-between xl:p-[90px] gap-4">
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
            <CustomerInformation />
            <OrderSummaryBox totalAmount={totalAmount} />
          </TabPanel>
          <TabPanel className="flex flex-col lg:flex-row gap-8" value="3">
            <ShippingAndPayment />
            <OrderSummaryBox totalAmount={totalAmount} />
          </TabPanel>
          <TabPanel className="flex flex-col lg:flex-row gap-8 justify-between" value="4">
            <Confirmation CartArr={CartArr} totalAmount={totalAmount} />
            <OrderSummaryBox totalAmount={totalAmount} />


          </TabPanel>
        </TabContext>
      </div>
      <ComponentRecommendation />
    </div>
  );
};
