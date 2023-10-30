import * as React from "react";
import { Set } from "../types/Types";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid"

export const SetContext = React.createContext<Set[]>([]);

export const SetProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [sets, setSets] = React.useState<Set[]>([]);

  React.useEffect(() => {
    setSets([
      {
        id: uuidv4(),
        name: "Set1",
        image: "url",
        cards: [{image: "url", text1: "Text1", text2: "Text2"},{image: "url", text1: "Text2", text2: "Text3"}]
      },
      {
        id: uuidv4(),
        name: "Set2",
        image: "url",
        cards: [{image: "url", text1: "Text1", text2: "Text2"}]
      },
    ]);
  }, []);

  return (
    <SetContext.Provider value={sets}>
      {children}
    </SetContext.Provider>
  );
};