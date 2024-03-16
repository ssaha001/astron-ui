import React, { useState } from "react";
import "./PastOrders.css"

const PastOrders = ({ pastOrders }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 2; // Two orders per page

  // Calculate indexes of the current page's orders
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = pastOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Function to change current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="past-orders">
      {currentOrders.map((order, index) => (
        <div key={index} className="order-item">
          <p><strong>Item:</strong> {order.item}</p>
          <p><strong>Quantity:</strong> {order.quantity}</p>
          <p><strong>Price:</strong> ${order.price}</p>
          <p><strong>Date:</strong> {order.date}</p>
        </div>
      ))}
      <div className="pagination">
        {/* Pagination buttons */}
        {Array.from({ length: Math.ceil(pastOrders.length / ordersPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default PastOrders;