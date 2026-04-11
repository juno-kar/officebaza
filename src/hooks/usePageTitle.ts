import { useEffect } from "react";

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title ? `${title} | OfficeBaza` : "OfficeBaza | ОфісБаза - все для вас";
    return () => {
      document.title = "OfficeBaza | ОфісБаза - все для вас";
    };
  }, [title]);
};

export default usePageTitle;
