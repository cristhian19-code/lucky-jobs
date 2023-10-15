import PropTypes from "prop-types";

interface Props {
    image: string;
    showBadge?: boolean;
    color: string
}

export const Avatar = (props: Props) => {

    return (
        <div className="relative w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${props.image})` }}>
            {
                props.showBadge ? (
                    <div className={`absolute h-3 w-3 rounded-full top-0 right-0 border-[3px] border-black ${props.color}`}></div>
                ) : null
            }
        </div>
    )
}

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
