"use client";
import { deleteProduct } from "@/actions/actions";
import { Box, Button, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function OneProductBtns({ id }) {
  const router = useRouter();

  async function handleDelete() {
    await deleteProduct(id);
    router.push("/products");
    alert("Продукт успешно удален!");
  }

  return (
    <Box className="flex gap-2 mt-6">
      <DeleteBtn onClick={handleDelete}>Delete product</DeleteBtn>
      <Button onClick={() => router.push(`/edit-product/${id}`)} variant="contained">
        Edit product
      </Button>
    </Box>
  );
}

const DeleteBtn = styled(Button)(() => ({
  background: "#ff0505",
  color: "white",
  "&:hover": {
    background: "#ff0505",
  },
}));
