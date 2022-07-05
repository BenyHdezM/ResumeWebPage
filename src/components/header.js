import logo from '../logo.svg';
import '../App.css';
import Menu from "./menu";
import './header.css';

function Header() {
    return (
        <header className="header faso-header">
            <div className="row">
                <div className="col-1-1 text-center">
                    <div className="logo faso-nav-heading">
                        <a href="https://www.paulachristen.com/"><img src="https://d3ob8sux7a0mqp.cloudfront.net/2651/1898431org.jpg?cv=201909271741" alt="Paula ChristenWatercolors" title="Paula ChristenWatercolors" /></a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <Menu />
            </div>
        </header>
    );
}

export default Header;
