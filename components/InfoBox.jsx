"use client";
const InfoBox = ({ isRenter }) => {
  return (
    <>
      {isRenter ? (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">For Renters</h2>
          <p className="mt-2 mb-4">
            Find your dream rental property. Bookmark properties and contact
            owners.
          </p>
          <a
            href="/properties"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Properties
          </a>
        </div>
      ) : (
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">For Property Owners</h2>
          <p className="mt-2 mb-4">
            List your properties and reach potential tenants. Rent as an Airbnb
            or long term.
          </p>
          <a
            href="/properties/add"
            className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
          >
            Add Property
          </a>
        </div>
      )}
    </>
  );
};

export default InfoBox;
