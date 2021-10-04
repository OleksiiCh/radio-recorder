import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { CheckAuthentication } from "./utils/CheckAuthentication";

const App: React.FC = ({ children }) => {
  useEffect(() => {
    CheckAuthentication();
  }, []);
  // const [authenticated, setAuthenticated] = useState(CheckAuthentication());
  const authenticated = true;

  return (
    <div>
      <Header authenticated={authenticated} />
      {children}
    </div>
  );
};

export default App;
