import { IconType } from "react-icons";

interface CardType {
    icon: IconType;
} 

const Card :React.FC<CardType>= ({icon : Icon}) => {
    return (
      <div
        className="relative h-[150px] min-w-[150px] overflow-hidden bg-sky-500 rounded-lg shadow-lg"
      >
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="p-8 text-6xl font-black uppercase text-white">
            <Icon className="text-white text-6xl" />
          </p>
        </div>
      </div>
    );
};

export default Card;