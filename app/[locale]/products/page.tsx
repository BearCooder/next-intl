import React, { Fragment, useState } from "react";
import Image from "next/image";
import products from "../../../dataConfig/Gallery";

export interface ArtworkDetailsProps {
  params: { params: { id: string } };
}

export default function ArtworkDetails(props: ArtworkDetailsProps) {
  return products.map((product) => {
    <Fragment key={product.id}>
      <Image
        src={product.coverImage}
        title={product.title}
        alt={""}
        placeholder="blur"
      />
      <div className="p-6 mx-auto mb-10 md:m-8 lg:w-1/2 lg:mx-auto lg:mt-10 shadow shadow-white">
        <h1 className="flex items-center justify-center bg-golden-gradient text-transparent bg-clip-text text-3xl">
          {product.title}
        </h1>
        <br />
        <p className="text-white mt-1 italic text-xl font-bold">
          {product.category}
        </p>
        <p className="text-white mt-1 italic text-xl whitespace-pre-line">
          {product.description}
        </p>
        <br />
      </div>
    </Fragment>;
  });
}
