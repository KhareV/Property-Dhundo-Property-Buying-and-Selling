import "@/assets/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "PropertyDhundo",
  description: "Find The Perfect Rental Property",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <div>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer />
          </div>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
