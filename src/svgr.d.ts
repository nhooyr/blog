declare module "*.svg" {
  import React from "react"
  const fc: React.FC<React.SVGProps<SVGSVGElement>>
  export default fc
}
