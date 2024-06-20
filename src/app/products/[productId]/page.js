"use client";
import { getOneProduct } from "@/actions/actions";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import OneProductBtns from "./OneProductBtns";

export default function page({ params: { productId } }) {
  const [oneProduct, setOneProduct] = useState(null);

  async function loadOneProduct() {
    let data = await getOneProduct(productId);
    setOneProduct(data);
  }

  useEffect(() => {
    loadOneProduct();
  }, []);

  if (!oneProduct) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <Box className="flex items-center h-[95vh]">
      <Box className="flex justify-center gap-10 w-full">
        <Box className="w-1/2 h-[70vh] object-cover" component={"img"} src={oneProduct.url} />
        <Box className="w-[300px]">
          <Typography variant="h6" className="font-bold">
            {oneProduct.title}
          </Typography>
          <Typography variant="body2" className="">
            {oneProduct.info}
          </Typography>
          <Typography className=" text-green-950 font-semibold">Цена: {oneProduct.price}$</Typography>
          <OneProductBtns id={oneProduct.id} />
        </Box>
      </Box>
    </Box>
  );
}
