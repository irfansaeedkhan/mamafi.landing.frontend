import Image from "next/image";
import { NextPageWithLayout } from "./_app.page";
import { PageLayoutComingSoon } from "@/layouts/page.layoutcomingsoon";

const ComingSoonPage: NextPageWithLayout = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Desktop Image */}
      <Image
        src="/images/coming-desktop.png"
        alt="Desktop Hero Image"
        fill
        className="hidden md:block object-cover"
        priority
      />

      {/* Mobile Image */}
      <Image
        src="/images/coming-mobile.jpg"
        alt="Mobile Hero Image"
        fill
        className="block md:hidden object-cover"
        priority
      />
    </div>
  );
};

ComingSoonPage.getLayout = (page) => {
  return (
    <PageLayoutComingSoon Layout={"landingCommingSoon"}>
      {page}
    </PageLayoutComingSoon>
  );
};

export default ComingSoonPage;
