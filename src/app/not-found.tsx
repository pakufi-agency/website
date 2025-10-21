import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Custom404Content from "@/components/Custom404/Custom404Content";

import MobileMenuProvider from "@/context/MobileMenuProvider";

export default function NotFound() {
  console.log("Rendering 404 Not Found page");
  return (
    <MobileMenuProvider>
      <Navbar />
      <Custom404Content />
      <Footer />
    </MobileMenuProvider>
  );
}
