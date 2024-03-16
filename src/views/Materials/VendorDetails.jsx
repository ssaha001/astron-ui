import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VendorList from "../../Data/vendorList.json";
import OrderList from "../../Data/OrderList.json";
import ChatWindow from "./ChatWindow";
import PastOrders from "./PastOrders";
import "./VendorDetails.css"

const VendorDetails = () => {
  const { name } = useParams();

  const [vendorDetails, setVendorDetails] = useState(null);
  const [pastOrders, setPastOrders] = useState([]);

  useEffect(() => {
    const foundVendor = VendorList.find(
      vendor => vendor.name.toLowerCase() === name.replace(/-/g, " ").toLowerCase()
    );

    if (foundVendor) {
      setVendorDetails(foundVendor);

      const vendorPastOrders = OrderList.filter(
        order => order.vendor.toLowerCase().replace(/\s+/g, "-") === foundVendor.name.toLowerCase().replace(/\s+/g, "-")
      );

      setPastOrders(vendorPastOrders);
    } else {
      console.log(`No details found for vendor "${name}".`);
    }
  }, [name]);

  if (!vendorDetails) {
    return <div>No details found for this vendor.</div>;
  }

  return (
    <div className="vendor-details-container">
      <div className="vendor-details">
        <h2>{vendorDetails.name}</h2>
        {/* Display vendor image */}
        <img src="data:image/jpeg;base64,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" alt={vendorDetails.name} className="vendor-image" />
        {/* Display vendor details */}
        <p><strong>Rating:</strong> {vendorDetails.rating}</p>
        <p><strong>Address:</strong> {vendorDetails.address}</p>
        <p><strong>Phone:</strong> {vendorDetails.phone}</p>
        <p><strong>Email:</strong> {vendorDetails.email}</p>
        <p><strong>Delivery:</strong> ${vendorDetails.delivery} / km</p>
        <p><strong>Sustainability:</strong> {vendorDetails.sustainability}</p>
        {vendorDetails.isVerified && <p className="verified">Verified</p>}
      </div>
      <div className="chat-window">
        {/* Render chat window */}
        <ChatWindow vendorName={vendorDetails.name} />
      </div>
      <div className="past-orders">
        {/* Render past orders */}
        <h3>Past Orders</h3>
        <PastOrders pastOrders={pastOrders} />
      </div>
    </div>
  );
};

export default VendorDetails;