import { useEffect } from "react";
import { recolourPage } from "../../scripts/RecolourPage.js";

export default function RecolouredPage({ children, pageColour }) {
  useEffect(() => {
    recolourPage(pageColour);
  }, []);

  return <>{children}</>;
}
