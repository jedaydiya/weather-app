import {
  Wind,
  ThermometerSimple,
  DropHalfBottom,
  Eye,
  CloudRain,
  Gauge,
} from "@phosphor-icons/react";

type Props = {
  icon: JSX.Element;
  title: string;
  info: string | JSX.Element;
  description: string;
};

const Tile = ({ icon, title, info, description }: Props) => {
  return (
    <>
      <section className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p2 mb-5 flex flex-col justify-between">
        <div className="flex text-sm font-bold">
          <span className="ml-2 mt-2">{icon}</span>
          <h4 className="ml-3 mt-2">{title}</h4>
        </div>
        <h3 className="mt-2 text-lg">{info}</h3>
        <p className="text-xs font-bold">{description}</p>
      </section>
    </>
  );
};

export default Tile;
