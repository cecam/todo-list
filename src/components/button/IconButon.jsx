import { Icon } from "./ButtonStyles";

const IconButton = ({
    content,
    color,
    action,
    type = 'button'
}) => {
    return ( 
        <Icon onClick={action} color={color} type={type}>
            {content}
        </Icon>
    );
}
 
export default IconButton;