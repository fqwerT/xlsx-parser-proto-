import { FileProps } from "../../interface/interface";

export const handleFileUpload = (item: any) => {
  // const file = e.target.files[0];
  const formData = new FormData();
  formData.append("file", item);

  fetch("http://localhost:5000/api/parse", {
    method: "POST",
    body: formData, 
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};

export const AsyncUploadFiles = (data: FileProps[]) => {
  Promise.allSettled(
    data.map((item) => {
      handleFileUpload(item);
    })
  );
};
