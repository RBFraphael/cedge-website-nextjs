import Image from 'next/image';
import Link from 'next/link';
import { FiMoreHorizontal } from 'react-icons/fi';

import cedgeLogo from '../resources/images/cedge-logo.png';

export default function Header() {
    return (
        <header className="container-fluid">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col px-lg-0">
                        <Link href="/">
                            <span><Image src={cedgeLogo} alt="Cedge" className="img-fluid logo-image" /></span>
                        </Link>
                    </div>
                    <div className="col-6 col-xl-11 col-xxl-10 text-end">
                        <nav className="d-none d-xl-block">
                            <ul className="list-inline m-0 text-end desktop-menu">
                                <li className="list-inline-item">
                                    <Link href="/">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="/deep-healthcare-experience">
                                        <span>Deep Healthcare<br/>Experience</span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="/world-class-quality">
                                        <span>World Class<br/>Quality</span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="/ultra-low-costs">
                                        <span>Ultra Low<br/>Costs</span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="/dedicated-partnership">
                                        <span>Dedicated<br/>Partnership</span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="/contact" className="button-link">
                                        <span>Contact Us</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <button className="btn btn-light rounded-circle d-inline d-xl-none fw-bold">
                            <FiMoreHorizontal />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}