import React from "react";
import "./App.css";
import LessonTypography from "./components/LessonTypography";
import LessonButton from "./components/LessonButton";
import LessonButtonGroup from "./components/LessonButtonGroup";
import LessonTextFiled from "./components/LessonTextFiled";
import LessonRadioGroup from "./components/LessonRadioGroup";
import LessonRadioExemple from "./components/LessonRadioExemple";
import LessonSelect from "./components/LessonSelect";

function App() {
  return (
    <>
      <div className="App">
        {/* <LessonTypography /> */}
        {/* <LessonButton /> */}
        {/* <LessonButtonGroup /> */}
        {/* <LessonTextFiled /> */}
        {/* <LessonRadioGroup /> */}
        {/* <LessonRadioExemple /> */}
        <LessonSelect />
      </div>
    </>
  );
}

export default App;
