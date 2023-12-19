//import { loadFile } from "../components/fileuploader/utils";

const workerUpload = () => {
  function loadFile(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const bstr = e.target.result;
      console.log(typeof bstr)
      postMessage(JSON.parse(JSON.stringify(bstr)));
    };

    reader.readAsBinaryString(file);
  }
  onmessage = function (e) {
    const file = e.data;
    loadFile(file);
  };
};

let code = workerUpload.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
const blob = new Blob([code], { type: "application/javascriptssky" });

export const workerScript = URL.createObjectURL(blob);

