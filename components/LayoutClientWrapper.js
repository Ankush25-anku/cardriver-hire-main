// "use client";
// import { useState } from "react";
// import NavMenuWrapper from "./NavMenuWrapper";
// import PopupSearchBox from "./PopupSearchBox";

// export default function LayoutClientWrapper({ children }) {
//   const [showSearch, setShowSearch] = useState(false);

//   return (
//     <>
//       <NavMenuWrapper showSearch={showSearch} setShowSearch={setShowSearch} />
//       {children}
//       <PopupSearchBox show={showSearch} onClose={() => setShowSearch(false)} />
//     </>
//   );
// }
