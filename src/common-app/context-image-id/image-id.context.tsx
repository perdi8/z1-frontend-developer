import React from "react";

interface ImgContext {
  imgContext: string;
  setImgContext: (value: string) => void;
}

export const MyContext = React.createContext<ImgContext>({
  imgContext: "",
  setImgContext: (value) => console.log("My Context missing provider"),
});

export const MyContextProvider: React.FC = (props) => {
  const { children } = props;
  const [imgContext, setImgContext] = React.useState("lemoncode");

  return (
    <MyContext.Provider value={{ imgContext, setImgContext }}>
      {children}
    </MyContext.Provider>
  );
};
