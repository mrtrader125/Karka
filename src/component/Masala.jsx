// src/component/Masala.jsx
import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Masala() {
  const [products] = useState([
    {
      _id: "masala-1",
      name: "Turmeric Powder",
      price: 50,
      image:
        "https://images.pexels.com/photos/1437598/pexels-photo-1437598.jpeg",
    },
    {
      _id: "masala-2",
      name: "Chili Powder",
      price: 45,
      image:
        "https://images.pexels.com/photos/533343/pexels-photo-533343.jpeg",
    },
    {
      _id: "masala-3",
      name: "Garam Masala",
      price: 70,
      image:
        "https://images.pexels.com/photos/1437598/pexels-photo-1437598.jpeg",
    },
  ]);

  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (product) => {
    setFavorites((prev) => ({
      ...prev,
      [product._id]: !prev[product._id],
    }));

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find((item) => item._id === product._id);

    if (exists) {
      wishlist = wishlist.filter((item) => item._id !== product._id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      alert(`${product.name} is already in the cart!`);
      return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart 🛒`);
  };

  return (
    <div style={{ padding: "60px", paddingTop: "100px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Masala Category
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item._id}>
            <Card
              sx={{
                height: "270px",
                width: "180px",
                boxShadow: 3,
                borderRadius: 3,
                position: "relative",
                padding: "8px",
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <IconButton
                onClick={() => toggleFavorite(item)}
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                  color: favorites[item._id] ? "red" : "grey",
                }}
              >
                <FavoriteIcon />
              </IconButton>

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: 3,
                  marginTop: "10px",
                }}
              />

              <CardContent sx={{ textAlign: "center", padding: "10px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography sx={{ color: "#555", mb: 1 }}>
                  ₹{item.price}
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{ borderRadius: 2 }}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Masala;
