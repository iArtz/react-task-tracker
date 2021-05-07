import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {location.pathname === '/' ? (
        <Link to='/about'>About</Link>
      ) : (
        <p>About</p>
      )}
    </footer>
  )
}

export default Footer
