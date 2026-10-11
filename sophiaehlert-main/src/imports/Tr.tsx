import imgLr from "figma:asset/4564f2ff4325061665a2787d142e525dd105b229.png";
import imgImg75E18Acec67811 from "figma:asset/a2d62d47a56e9097d95d872afbc3b407791e767c.png";

function Lr() {
  return (
    <div className="h-[295px] overflow-clip relative shrink-0 w-full" data-name="Lr">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLr} />
      <div className="absolute h-[350px] left-[-7.5px] top-[-19px] w-[397px]" data-name="IMG_75E18ACEC678-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg75E18Acec67811} />
      </div>
    </div>
  );
}

export default function Tr() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start relative size-full" data-name="Tr">
      <Lr />
    </div>
  );
}