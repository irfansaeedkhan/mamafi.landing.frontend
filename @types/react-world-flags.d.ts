declare module "react-world-flags" {
  import { ComponentType, CSSProperties } from "react";

  interface FlagProps {
    code: string;
    className?: string;
    style?: CSSProperties;
  }

  const Flag: ComponentType<FlagProps>;
  export default Flag;
}
