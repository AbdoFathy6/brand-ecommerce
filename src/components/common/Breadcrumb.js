import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BreadCrumb = () => {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    // Update breadcrumbs based on the current location
    useEffect(() => {
        const pathnames = location.pathname.split("/").filter((x) => x);
        setBreadcrumbs(pathnames);
    }, [location]);

    // إضافة العنصر عند الضغط وإزالته عند الرجوع
    const handleAddBreadcrumb = (breadcrumb) => {
        if (!breadcrumbs.includes(breadcrumb)) {
            setBreadcrumbs([...breadcrumbs, breadcrumb]);
        }
    };

    const handleRemoveBreadcrumb = (breadcrumb) => {
        setBreadcrumbs(breadcrumbs.filter((item) => item !== breadcrumb));
    };

    return (
        <nav aria-label="breadcrumb" className="container">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <NavLink to="/home" onClick={() => handleRemoveBreadcrumb('/')} className='text-secondary'>Home</NavLink>
                </li>
                {breadcrumbs.map((breadcrumb, index) => {
                    const path = `/${breadcrumbs.slice(0, index + 1).join('/')}`;
                    return (
                        <li key={index} className="breadcrumb-item">
                            <NavLink to={path} onClick={() => handleAddBreadcrumb(breadcrumb)} className='text-secondary'>
                                {breadcrumb}
                            </NavLink>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default BreadCrumb;




