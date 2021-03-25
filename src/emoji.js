import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function Emoji() {
  return (
    <Editor
      apiKey="no-api-key"
      init={{
        plugins: "emoticons",
        toolbar: "emoticons",
        toolbar_location: "bottom",
        menubar: false,
      }}
    />
  );
}

export default Emoji;