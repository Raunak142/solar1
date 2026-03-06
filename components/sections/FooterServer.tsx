import Footer from "./Footer";
import { getFooter } from "@/lib/data";

export default async function FooterServer() {
  const settings = await getFooter();

  return <Footer data={settings} />;
}
