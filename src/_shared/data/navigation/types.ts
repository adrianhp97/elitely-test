import React, { SVGProps } from "react";

export type MenuItem = {
  icon: string | React.ReactNode | React.FC<SVGProps<SVGSVGElement>>;
  key: string;
  label: string;
};
