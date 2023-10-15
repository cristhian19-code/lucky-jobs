import PropTypes from 'prop-types';

interface Props {
    label?: string;
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
    max?: number | undefined;
    min?: number | undefined;
}

export const InputBase = ({ label, type, max, min }: Props) => {
    return (
        <input className='bg-transparent h-10 w-full px-2 outline-none placeholder:text-zinc-400 placeholder:font-semibold' type={type} placeholder={label} max={max} min={min}></input>
    )
}

InputBase.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
}
