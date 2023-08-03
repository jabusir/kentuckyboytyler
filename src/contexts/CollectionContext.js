import { createContext, useState } from 'react';

const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState({});

  return (
    <CollectionContext.Provider value={{ collections, setCollections }}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionContext;
