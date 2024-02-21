import {useState, useEffect} from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add an event listener to detect screen size changes
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Trigger the effect only on initial mount

  return isMobile;
}
