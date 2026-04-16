import React from "react";
import Navbar from "./Navbar";
import { getStrapiData } from "../../utils/utils";
import { SERVICES_ALL_QUERY } from "../../graphqlQueries/Services";

interface Service {
  name: string;
  slug: string;
  createdAt: string;
}

interface StrapiResponse<T> {
  services?: T[];
}

const NavbarServer = async () => {
  const data = await getStrapiData<StrapiResponse<Service>>({
    query: SERVICES_ALL_QUERY,
    pageType: "Services Navigation",
  });

  const navProps = (data?.services || []).map((service) => ({
    name: service.name,
    slug: service.slug,
  }));

  return <Navbar services={navProps} />;
};

export default NavbarServer;
