import PropTypes from 'prop-types';
import Button from './Button'
import {useLocation} from 'react-router-dom'


const Header = ({title, onAdd, showAdd}) => {
    // const onClick = () => {
    //     console.log('poot')
    // }
    const location = useLocation()

     console.log(location.pathname === "/react-task-tracker/about")

    return (
        <header className = 'header'> 
            <h1>{title}</h1>
            {location.pathname === "/react-task-tracker/" && <Button 
            color = {showAdd ? 'red' : 'green'}
            text = {showAdd ? 'hide' : 'poot'}
            onClick = {onAdd}/> }
        </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
 
Header.propTypes = {
    title : PropTypes.string, 
}

// //CSS IN JS
// const headingStyle = {
//     color: 'black', 
//     backgroundColor: 'aqua'

// }
export default Header