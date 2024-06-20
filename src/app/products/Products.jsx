"use client";
import { getProducts } from "@/actions/actions";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const router = useRouter();

  async function loadProducts() {
    let data = await getProducts();
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Box className="flex flex-wrap justify-center gap-5 mt-10">
      {products.map((item) => (
        <Card key={item.id} sx={{ width: 300 }}>
          <CardMedia image={item.url} sx={{ height: 200 }} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}$
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => router.push(`/products/${item.id}`)} size="small" variant="contained">
              More info
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
