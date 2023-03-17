import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Lori Travel | ${title}`;
  });
};

export default useDocumentTitle;
