"use client";
import { API, editProduct, getOneProduct } from "@/actions/actions";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Form() {
  const { productId } = useParams();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");

  const [oneProduct, setOneProduct] = useState(null);

  const router = useRouter();

  async function loadOneProduct() {
    let data = await getOneProduct(productId);
    setOneProduct(data);
  }

  useEffect(() => {
    loadOneProduct();
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setUrl(oneProduct.url);
      setTitle(oneProduct.title);
      setInfo(oneProduct.info);
      setPrice(oneProduct.price);
    }
  }, [oneProduct]);

  async function handleClick(e) {
    e.preventDefault();
    let newProduct = {
      url,
      title,
      info,
      price: +price,
    };

    await editProduct(productId, newProduct);

    setUrl("");
    setTitle("");
    setInfo("");
    setPrice("");
    alert("Продукт успешно обновлен!");
    router.push("/products");
  }

  return (
    <form onSubmit={handleClick}>
      <TextField required value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Url..." />
      <TextField required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title..." />
      <TextField required value={info} onChange={(e) => setInfo(e.target.value)} placeholder="Info..." />
      <TextField type="number" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price..." />
      <Button type="submit" variant="contained">
        Edit products
      </Button>
    </form>
  );
}
