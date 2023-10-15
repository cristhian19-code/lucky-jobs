import PropTypes from 'prop-types';

interface Props {
    text: string;
    className?: string;
    outline?: boolean | false;
}

export const Badge = ({ text, className, outline }: Props) => {
    return (
        <span className={`text-xs rounded-xl px-2 py-1 font-bold text-zinc-600 ${outline ? 'border border-zinc-500' : 'bg-white'} ${className}`}>{text}</span>
    )
}

Badge.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    outline: PropTypes.bool
}
