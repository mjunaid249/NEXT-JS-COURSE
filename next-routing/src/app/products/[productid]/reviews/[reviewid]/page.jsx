import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>
        Review {params.reviewid} for product {params.productid}
      </h1>
    </div>
  );
};

export default page;
