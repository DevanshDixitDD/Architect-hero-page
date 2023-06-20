import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[1014px]">
      <div className="absolute top-[122px] left-[1004px] rounded-t-481xl rounded-br-481xl rounded-bl-none bg-color-2 w-[896px] h-[892px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
      <img
        className="absolute top-[0px] left-[0px] w-[1049px] h-[1014px] object-cover"
        alt=""
        src="/rectangle-45@2x.png"
      />
    </div>
  );
};

export default FrameComponent;
