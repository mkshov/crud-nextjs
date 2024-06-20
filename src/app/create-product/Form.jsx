"use client";
import { API } from "@/actions/actions";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

async function createProduct(product) {
  await axios.post(API, product);
}

export default function Form() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");

  function handleClick(e) {
    e.preventDefault();
    let newProduct = {
      url,
      title,
      info,
      price: +price,
    };

    createProduct(newProduct);
    setUrl("");
    setTitle("");
    setInfo("");
    setPrice("");
    alert("Продукт успешно добавлен!");
  }

  return (
    <form onSubmit={handleClick}>
      <TextField required value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Url..." />
      <TextField required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title..." />
      <TextField required value={info} onChange={(e) => setInfo(e.target.value)} placeholder="Info..." />
      <TextField type="number" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price..." />
      <Button type="submit">Add products</Button>
    </form>
  );
}
