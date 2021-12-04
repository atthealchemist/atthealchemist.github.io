import React from "react";

const Badge = ({
    icon,
    caption,
    value,
    bgColor = "bg-blue-400",
    valueBgColor = "bg-yellow-200",
    valueColor = "text-white"
}) =>
    <div className={`flex flex-row rounded-3xl justify-center items-center ${bgColor}`}>
        {icon && <img className="flex ml-2 w-5 h-5" src={icon} />}
        <span className={`flex font-semibold p-1 pl-2 ${valueColor}`}>{caption}</span>
        <span className={`flex font-semibold ml-1 border border-transparent rounded-3xl p-1 pl-2 pr-2 ${valueBgColor}`}>{value}</span>
    </div>;

const BooleanBadge = (props) => {
    const { value, valueBgColor, ...rest } = props;

    const valueColor = value === "да" ? "bg-green-500" : "bg-red-500";

    return <Badge {...rest} value={value} valueBgColor={valueColor} />
};

export { Badge, BooleanBadge };