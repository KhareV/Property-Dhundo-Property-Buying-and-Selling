"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import deleteProperty from "@/app/actions/deleteProperty";
import { toast } from "react-toastify";
const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);
  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );
    if (!confirmed) return;
    await deleteProperty(propertyId);
    const updatedProperties = properties.filter(
      (property) => property._id !== propertyId
    );
    setProperties(updatedProperties);
    toast.success("Property Deleted Succesfully");
  };
  return properties.map((property) => (
    <div
      className="bg-gray-100 rounded-md mb-8 p-4 shadow-md hover:shadow-lg transition"
      key={property._id}
    >
      <Link href="/property">
        <Image
          className="h-40 w-full rounded-md object-cover"
          src={property.images[0]}
          width={200}
          height={200}
          alt="Property 1"
        />
      </Link>
      <div className="mt-3">
        <p className="text-lg font-semibold">{property.name}</p>
        <p className="text-gray-600">
          Address: {property.location.street} {property.location.city}{" "}
          {property.location.state}
        </p>
      </div>
      <div className="mt-4 flex space-x-3">
        <Link
          href={`/properties/${property._id}/edit`}
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Edit
        </Link>
        <button
          className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
          type="button"
          onClick={() => handleDeleteProperty(property._id)}
        >
          Delete
        </button>
      </div>
    </div>
  ));
};

export default ProfileProperties;
