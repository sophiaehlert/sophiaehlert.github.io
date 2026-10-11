import imgLr from "figma:asset/dfcace8dde7da96b97c3c4a18ffc25a3b2af1192.png";
import imgImg84381 from "figma:asset/a3a1e1ac758aed0b6d4a63a8aca73a1872ff4262.png";

function Lr() {
  return (
    <div className="h-[298px] overflow-clip relative shrink-0 w-[391px]" data-name="Lr">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLr} />
      <div className="absolute h-[511px] left-[0.5px] top-[-130px] w-[383px]" data-name="IMG_8438 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg84381} />
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