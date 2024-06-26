import React from "react";
interface VideoProps {
  url: string;
}

export const Video: React.FC<VideoProps> = ({ url }) => {
  return (
    <iframe
      className=" w-[360px] h-[650px]  min-[414px]:w-[400px] min-[414px]:h-[850px] md:w-[700px] md:h-[1000px]  lg:w-[800px] lg:h-[1200px] xl:w-[500px] xl:h-[800px] rounded-lg "
      src={url}
    ></iframe>
  );
};
// "https://gifer.com/embed/Xrl7";
