import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  ActiveSectionContext,
  ActiveSectionName,
} from "../../context/ActiveSectionContext";
import { useContext } from "react";
export default function useActiveSection(
  section: ActiveSectionName,
  threshold: number = 0.5
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } =
    useContext(ActiveSectionContext)!;
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section as ActiveSectionName);
    }
  }, [inView, section, timeOfLastClick]);
  return ref;
}
