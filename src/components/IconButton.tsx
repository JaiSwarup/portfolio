import { IconType } from "react-icons";

interface IconButtonProps {
    href : string;
    icon : IconType;
    title? : string
    className? : string
}
const Button : React.FC<IconButtonProps> = ({href, icon : Icon, title, className}) => {
    const onClick = () => {
        if(href) {
            window.open(href, '_blank');
        }
    }

    return (
        <button className={`px-6 py-2.5 bg-sky-600 hover:bg-sky-500 transition-colors font-normal rounded-md text-black text-3xl hover:shadow-inner flex justify-center items-center ${className}`} title={title} onClick={onClick}>
            {title && <span className="mr-2 text-white text-xl">{title}</span>}
            {Icon && <Icon className="text-gray-100 hover:text-gray-50"/>}</button>
    );
};

export default Button;