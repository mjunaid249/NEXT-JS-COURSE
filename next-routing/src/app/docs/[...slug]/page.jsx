import React from "react";

export default function Docs({ params }) {
  {
    if (params.slug.lenght === 2) {
      return (
        <h1>
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
      );
    } else if (params.slug.lenght === 1) {
      return <h1>Viewing docs for feature {params.slug[0]}</h1>;
    } else {
      return <div>Docs Home Page</div>;
    }
  }
}
