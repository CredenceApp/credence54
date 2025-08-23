import { useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HashElement = () => {
  let location = useLocation();
  let navigateTo = useNavigate();
  let hashElement = useMemo(() => {
    let hash = location.hash;
    const removeHashCharacter = (str) => {
      const result = str.slice(1);
      return result;
    };
    if (hash) {
      let element = document.getElementById(removeHashCharacter(hash));
      return element;
    } else {
      return null;
    }
  }, [location]);
  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    } else if (location.pathname !== "/") {
        navigateTo('/')
    }
  }, [hashElement]);
  return null;
};
export default HashElement;