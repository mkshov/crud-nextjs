import { getProducts } from "@/actions/actions";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Products from "./Products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <Products />
    </div>
  );
}
