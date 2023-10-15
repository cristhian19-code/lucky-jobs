import React from "react";
import PropTypes from 'prop-types';

interface Props {
    icon: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const IconButton = ({ icon, className, onClick }: Props) => {
    return (
        <button onClick={() => onClick ? onClick() : null} className={`border border-white rounded-full p-2 ${className}`}>
            {icon}
        </button>
    )
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
}
