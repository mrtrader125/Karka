// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function Buy() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { products } = location.state || {};

//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [payment, setPayment] = useState("COD");

//   const totalPrice = products.reduce((sum, item) => sum + Number(item.price), 0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/order");
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "1100px",
//         margin: "40px auto",
//         padding: "20px",
//         display: "flex",
//         gap: "20px",
//         flexWrap: "wrap",
//       }}
//     >
//       {/* LEFT - PRODUCT LIST */}
//       <div
//         style={{
//           flex: 1,
//           border: "1px solid #ddd",
//           borderRadius: "10px",
//           padding: "20px",
//           boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2 style={{ textAlign: "center" }}>Products</h2>

//         {products.map((item) => (
//           <div
//             key={item._id}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "15px",
//               marginBottom: "15px",
//               paddingBottom: "10px",
//               borderBottom: "1px solid #eee",
//             }}
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               style={{ width: "80px", height: "80px", borderRadius: "10px" }}
//             />
//             <div>
//               <h4>{item.name}</h4>
//               <p style={{ fontWeight: "bold" }}>₹{item.price}</p>
//             </div>
//           </div>
//         ))}

//         {/* TOTAL PRICE */}
//         <h2 style={{ textAlign: "center", marginTop: "20px" }}>
//           Total: ₹{totalPrice}
//         </h2>
//       </div>

//       {/* RIGHT - ADDRESS FORM */}
//       <div
//         style={{
//           flex: 1,
//           border: "1px solid #ddd",
//           borderRadius: "10px",
//           padding: "20px",
//           boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2 style={{ textAlign: "center" }}>Delivery Details</h2>

//         <form onSubmit={handleSubmit}>
//           <label>Full Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             style={inputStyle}
//           />

//           <label>Address:</label>
//           <textarea
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             rows="3"
//             required
//             style={inputStyle}
//           />

//           <label>Phone Number:</label>
//           <input
//             type="number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//             style={inputStyle}
//           />

//           <label>Payment Method:</label>
//           <select
//             value={payment}
//             onChange={(e) => setPayment(e.target.value)}
//             style={inputStyle}
//           >
//             <option value="COD">Cash On Delivery</option>
//             <option value="UPI">UPI</option>
//             <option value="Card">Debit/Credit Card</option>
//           </select>

//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "10px",
//               backgroundColor: "#4CAF50",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               marginTop: "10px",
//             }}
//           >
//             Place Order
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: "8px",
//   margin: "8px 0 15px 0",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };

// export default Buy;




import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Buy() {
  const location = useLocation();
  const navigate = useNavigate();

  const { products } = location.state || { products: [] };

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [payment, setPayment] = useState("COD");

  const totalPrice = products.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order");
  };

  return (
    <div style={styles.page}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Order Your Products</h1>

        {/* PRODUCT LIST */}
        <div style={styles.productList}>
          {products.map((item) => (
            <div key={item._id} style={styles.productCard}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.productTextBox}>
                <p style={styles.pName}>{item.name}</p>
                <p style={styles.pPrice}>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <hr style={{ margin: "25px 0", borderColor: "#ddd" }} />

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <div style={styles.row}>
            <div style={styles.inputBox}>
              <label>Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.inputBox}>
              <label>Mobile *</label>
              <input
                type="number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>

          <label>Address *</label>
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.input}
          />

          <div style={styles.row}>
            <div style={styles.inputBox}>
              <label>City *</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.inputBox}>
              <label>State *</label>
              <input
                type="text"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.inputBox}>
              <label>Country *</label>
              <input
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.inputBox}>
              <label>Pincode *</label>
              <input
                type="number"
                required
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>

          <label>Payment Method *</label>
          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            style={styles.input}
          >
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card Payment</option>
          </select>

          {/* TOTAL + BUTTON */}
          <div style={styles.totalRow}>
            <b>Total</b>
            <b>₹{totalPrice}</b>
          </div>

          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button type="submit" style={styles.orderBtn}>
              Order Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 10px",
    background: "url('https://img.freepik.com/premium-photo/blur-bokeh-supermarket-grocery-store_924501-194.jpg') center/cover",
    
    minHeight: "100vh",
  },

  formContainer: {
    width: "100%",
    maxWidth: "800px",
    background: "transparent",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 0 25px rgba(0,0,0,0.2)",
    backdropFilter: "blur(20px)",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
    color:"white",
  },

  productList: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  productCard: {
  padding: "8px",
  background: "#fff",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  border: "1px solid #eee",
},

  image: {
  width: "100%",
  height: "80px",
  borderRadius: "6px",
  objectFit: "cover",
},


  productTextBox: {
    marginTop: "8px",
  },

  pName: {
  fontWeight: 600,
  fontSize: "13px",
  marginTop: "5px",
},

pPrice: {
  fontWeight: 500,
  fontSize: "12px",
  color: "#444",
},


  row: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },

  inputBox: {
    flex: 1,
  },

  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #bbb",
    marginTop: "5px",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    fontSize: "18px",
    padding: "12px",
    background: "#f1f1f1",
    borderRadius: "6px",
  },

  orderBtn: {
    padding: "12px 25px",
    background: "#E86B5A",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Buy;
