import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 페이지 이동후 최상으로
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}