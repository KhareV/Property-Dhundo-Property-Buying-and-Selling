import Link from "next/link";
import Image from "next/image";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import profileDefault from "@/assets/images/profile.png";
import connectDB from "@/config/database";
import ProfileProperties from "@/components/ProfileProperties";
import { convertToSerializableObject } from "@/utils/convertToObject";
const ProfilePage = async () => {
  await connectDB();
  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;
  if (!userId) {
    {
      throw new Error("User ID is required");
    }
  }
  const propertiesDocs = await Property.find({ owner: userId }).lean();
  const properties = propertiesDocs.map(convertToSerializableObject);
  return (
    <div>
      <section className="bg-blue-50 min-h-screen">
        <div className="container mx-auto py-24 px-4">
          <div className="bg-white px-8 py-10 shadow-md rounded-md border max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">
              Your Profile
            </h1>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Profile Section */}
              <div className="md:w-1/3 mx-auto md:mx-0 md:mr-10 mb-10 md:mb-0 flex flex-col items-center">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full object-cover mb-4"
                  src={sessionUser.user.image || profileDefault}
                  width={200}
                  height={200}
                  alt="User"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-xl font-semibold mb-1">
                    Name:{" "}
                    <span className="font-normal">{sessionUser.user.name}</span>
                  </h2>
                  <h2 className="text-xl font-semibold">
                    Email:{" "}
                    <span className="font-normal">
                      {sessionUser.user.email}
                    </span>
                  </h2>
                </div>
              </div>

              {/* Listings Section */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
                  Your Listings
                </h2>

                {/* Listing Item */}
                <ProfileProperties properties={properties} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
