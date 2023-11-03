export const changeCell = (
  id: string | number,
  title: string | null,
  content: string | number | null,
  isOpen: boolean = false,
  setData: React.Dispatch<React.SetStateAction<any[]>>,
) => {
  setData((prevData) =>
    prevData.map((item) => {
      if (item.id === id) {
        if (title) {
          return { ...item, title };
        }
        if (content) {
          return { ...item, content };
        }
        if (isOpen) {
          return { ...item, isOpen: !item.isOpen };
        }
      }
      return item;
    })
  );
};


export  const createCell = (setData:React.Dispatch<React.SetStateAction<any[]>>,setSelected:React.Dispatch<React.SetStateAction<string>>) => {
    const newId = Math.random().toString();
    setData((prevData) => [
      ...prevData,
      {
        title: `столбец ${prevData.length + 1}`,
        id: newId,
        isOpen: false,
        content: "",
      },
    ]);
    setSelected(newId);
  };

  export const adapterData = (data:any[]) => {
    const listHeader = [];
    const listColumn = [];
    data.map((i) => {
      listColumn.push(i.content);
      listHeader.push(i.title);
    });
    return { listHeader, listColumn };
  }