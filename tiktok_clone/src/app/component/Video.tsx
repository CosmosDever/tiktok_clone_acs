import React from "react";
interface VideoProps {
  url: string;
}

export const Video: React.FC<VideoProps> = ({ url }) => {
  return (
    <iframe
      className=" w-[375px] h-[667px]  lg:w-[300px] lg:h-[600px] xl:w-[500px] xl:h-[800px] rounded-lg "
      src={url}
    ></iframe>
  );
};
// "https://gifer.com/embed/Xrl7";
