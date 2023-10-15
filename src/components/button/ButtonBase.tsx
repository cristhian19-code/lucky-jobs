import PropTypes from 'prop-types'
interface Props {
  color?: string;
  children?: React.ReactNode;
}

export const ButtonBase = ({ color, children }: Props) => {
  return (
    <button className={`bg-black text-md font-medium rounded-2xl text-white px-3 py-1 ${color}`}>
      {children}
    </button>
  )
}

ButtonBase.propTypes = {
  color: PropTypes.string
}
