import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";

import PortfolioMasonry from "@/components/portfolios/PortfolioMasonry";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Campaign Merch! || From signs to swag",
  description:
    "From signs to swag",
};
export default function WorksMasonryPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <PortfolioMasonry />
        <Cta />
      </main>
    </>
  );
}
