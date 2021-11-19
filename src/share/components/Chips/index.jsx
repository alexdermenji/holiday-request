import classnames from 'classnames';
import PropTypes from 'prop-types'
const ChipsComponent = (props) => {
return (
<span className={classnames('chips', `chips-${props.variant}`)}>
  {props.children}
</span>
)
}

ChipsComponent.propTypes = {
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'error'])
}

ChipsComponent.defaultProps = {
  variant: 'default'
}
export default ChipsComponent