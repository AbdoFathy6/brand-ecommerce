import React, { useState, useEffect } from "react";
import Rectangle from '../../assets/Flag/Rectangle.png'
import { NavLink } from 'react-router-dom';
import Germany from '../../assets/Flag/Almania.png'
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // FontAwesome for star icons
import { FaCircle } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { GoCheck } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import useIsMobile from '../../useIsMobile';  // Import the custom hook
import { Carousel, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../../assets/css/Details2.css'
import 'react-toastify/dist/ReactToastify.css';


const ReadMore = ({ summary, fullText }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };


    return (
        <div>
            <p>
                {isExpanded ? fullText : summary}
            </p>
            <button className='text-primary bg-transparent border-0' onClick={toggleExpanded}>
                {isExpanded ? 'Read less' : 'Read more'}
            </button>
        </div>
    );
};

const DetailsOfProduct = () => {
    const [product, setProduct] = useState({})
    const isMobile = useIsMobile();
    const dispatch = useDispatch();
    const API_URL = 'https://fakestoreapi.com/products'
    const params = useParams();
    useEffect(() => {
        fetch(`${API_URL}/${params.id}`)
            .then(response => response.json())
            .then((product) => {
                setProduct(product)
            })
    }, [params.id]);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    const notify = () => toast.success("Product added to cart!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });




    return (<>
        <article className='row p-lg-5 mb-4 mx-0 w-100  bg-light'>

            <aside className="col-lg-4 p-0">
                <figure class=" gallery-warp mb-0">
                    <div href="#" className="img-main-warp   mt-0 pt-0  mb-lg-2 ">
                        {isMobile ? (
                            <Carousel>
                                <Carousel.Item style={{ backgroundColor: "#F0F0F0" }}>
                                    <img src={product.image} alt={product.title} className='w-100 p-5 mb-lg-2 shadow' style={{ width: '380px', height: '380px', mixBlendMode: 'multiply' }} />
                                </Carousel.Item>
                                <Carousel.Item style={{ backgroundColor: "rgb(196 196 196 / 48%)" }}>
                                    <img src={product.image} alt={product.title} className='w-100 p-5 mb-lg-2 shadow' style={{ width: '380px', height: '380px', mixBlendMode: 'multiply' }} />
                                </Carousel.Item>
                                <Carousel.Item style={{ backgroundColor: "rgb(159 159 159)" }}>
                                    <img src={product.image} alt={product.title} className='w-100 p-5 mb-lg-2 shadow' style={{ width: '380px', height: '380px', mixBlendMode: 'multiply' }} />
                                </Carousel.Item>
                            </Carousel>

                        ) : (
                            <img src={product.image} alt={product.title} className='w-100 p-4 bg-light border rounded   mb-lg-2' style={{ width: '380px', height: '380px', mixBlendMode: 'darken' }} />

                        )}
                    </div>
                    <div class="thumbs-wrap text-center overflow-auto d-none d-lg-flex text-nowrap">
                        <NavLink href="#" className="item-tamble">
                            <img src={product.image} alt={product.title} className="img-thumbnail " width="66"
                            />
                        </NavLink>
                        <NavLink href="#" className="item-tamble">
                            <img src={product.image} alt={product.title} className="img-thumbnail " width="66"
                            />
                        </NavLink>
                        <NavLink href="#" className="item-tamble">
                            <img src={product.image} alt={product.title} className="img-thumbnail " width="66"
                            />
                        </NavLink>
                        <NavLink href="#" className="item-tamble">
                            <img src={product.image} alt={product.title} className="img-thumbnail " width="66"
                            />
                        </NavLink>
                        <NavLink href="#" className="item-tamble">
                            <img src={product.image} alt={product.title} className="img-thumbnail " width="66"
                            />
                        </NavLink>
                        <NavLink href="#" className="item-tamble">
                            <img src={product.image} alt={product.title} className="img-thumbnail " width="66"
                            />
                        </NavLink>
                    </div>


                </figure>
            </aside>
            <main className="col-lg-5">
                <div className="in-stock">
                    <p className="check-1 d-lg-inline d-none text-success">
                        <GoCheck /> in stack
                    </p>
                    <h5 className="text-black pt-2"> Title {product.title} </h5>
                    <div className="card-rate d-flex" style={{ fontSize: '14px' }}>
                        <div className="rating-card pe-1">
                            <span className="color-rate">
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStarHalfAlt className="star" />
                            </span>
                        </div>
                        <p className="class-rate-text">
                            <span className="text-warning">4.3</span>
                            <FaCircle style={{ color: '#DEE2E7', padding: '0 2px 0 7px', marginRight: "1px" }} />

                            <MdOutlineMessage />
                            <span>32 reviews</span>
                            <FaCircle style={{ color: '#DEE2E7', padding: '0 2px 0 7px', marginRight: "1px" }} />

                            <MdOutlineShoppingBasket />
                            <span>154 Sold</span>
                        </p>
                    </div>
                    <div className="mb-2 ">
                        <div className='d-lg-none d-flex '> <h4 className='text-danger pe-1'>${product.price}</h4>  <span>(50-100pcs)</span></div>
                        <div className='d-lg-none d-flex '> <button className="btn btn-primary w-100 ">Send inquiry</button>
                            <Button to='/' className="divHeart ms-2 p-0  shadow">
                                <FaRegHeart className="Heart text-light   " />
                            </Button>
                        </div>
                        <Button
                            variant="outline-primary"
                            onClick={() => {
                                dispatch(addToCart(product));
                                notify()
                            }}
                            className="d-lg-none w-50 d-flex m-auto mt-2 justify-content-center"
                        >
                            Add to Cart
                        </Button>

                    </div>
                    <ul className="prices-of d-lg-flex d-none">
                        <li className="price-1">
                            <h5>${product?.price}</h5>
                            <p>50-100 pcs</p>
                        </li>
                        <li className="price-2">
                            <h5>$90.00</h5>
                            <p>100-700 pcs</p>
                        </li>
                        <li className="price-3">
                            <h5>$78.00</h5>
                            <p>700+ pcs</p>
                        </li>
                    </ul>

                    <table className="table-1 d-lg-block d-none">
                        <tbody>
                            <tr className="border-bottom">
                                <th className="data-of-T-shirt">price:</th>
                                <th id="solid">Negotiable</th>
                            </tr>
                            <tr>
                                <td className="data-of-T-shirt">Type:</td>
                                <td id="solid">Classic shoes</td>
                            </tr>
                            <tr>
                                <td className="data-of-T-shirt">Material:</td>
                                <td id="solid">Francisco Chang</td>
                            </tr>
                            <tr className="border-bottom">
                                <td className="data-of-T-shirt">Design:</td>
                                <td id="solid">Plastic material</td>
                            </tr>
                            <tr>
                                <td className="data-of-T-shirt">Customization:</td>
                                <td id="solid">Customized logo and design custom packages</td>
                            </tr>
                            <tr>
                                <td className="data-of-T-shirt">Protection:</td>
                                <td id="solid">Refund Policy</td>
                            </tr>
                            <tr>
                                <td className="data-of-T-shirt">Warranty:</td>
                                <td id="solid">2 years full warranty</td>
                            </tr>

                        </tbody>
                    </table>
                    <table className='table-1   d-lg-none d-block'>
                        <tbody className='w-100'>

                            <tr>
                                <td className="data-of-T-shirt">Type:</td>
                                <td id="solid">Classic shoes</td>
                            </tr>
                            <tr>
                                <td className="data-of-T-shirt">Material:</td>
                                <td id="solid">Francisco Chang</td>
                            </tr>
                            <tr className="border-bottom">
                                <td className="data-of-T-shirt">Design:</td>
                                <td id="solid">Plastic material</td>
                            </tr>

                        </tbody>
                        <p>

                            <ReadMore
                                summary="Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and ..."
                                fullText="Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and detailed mappings, ideal for geographic studies and large-scale environmental observations. It's equipped with advanced sensors to gather real-time data and support various learning modules."
                            />

                        </p>
                    </table>
                </div>
            </main>
            <aside className="col-lg-3  d-lg-block d-none bg-transparent">
                <div className="join   ">
                    <div className="join-body border bg-light h-100">
                        <div className="join-title">                            <img src={Rectangle} alt="Flag" />
                            <div className="join-title-1">
                                <p>Supplier</p>
                                <p>Guanjoi Trading LLC</p>
                            </div>
                        </div>
                        <ul className="ps-0 d-lg-block d-flex justify-content-between">
                            <li>
                                <img src={Germany} alt="Germany Flag" />
                                <span>Germany, Berlin</span>
                            </li>
                            <li>
                                <MdOutlineVerifiedUser />                                <span>Verified seller</span>
                            </li>
                            <li>
                                <TfiWorld />                                <span>Worldwide shipping</span>
                            </li>
                        </ul>
                        <div className='d-lg-inline d-none '> <button className="btn btn-primary w-100">Send inquiry</button>
                            <button className="btn btn-light w-100 border mt-2">Seller’s profile</button></div>

                    </div>
                    <div className='d-lg-block d-none'>
                        <Button className="btn btn-light w-50 border-0 text-primary mt-1 " style={{ marginLeft: '4rem' }}>
                            <FaRegHeart /> Save for later
                        </Button>
                        <Button
                            variant="outline-primary"
                            onClick={() => {
                                dispatch(addToCart(product));
                                notify()
                            }}
                            className="d-lg-block d-none mt-1 w-50 m-auto"
                        >
                            Add to Cart
                        </Button>
                    </div>

                </div>
            </aside>
        </article>
        <aside className="col-lg-3  container  d-block d-lg-none bg-none ">
            <div className="join bg-light ">
                <div className="join-body border">
                    <div className="join-title">
                        {/* استبدل مسار الصورة بمسار الصورة الصحيح في مشروعك */}
                        <img src={Rectangle} alt="Flag" />
                        <div className="join-title-1">
                            <p>Supplier</p>
                            <p>Guanjoi Trading LLC</p>
                        </div>
                    </div>
                    <ul className="ps-0 d-lg-block d-flex justify-content-around">
                        <li>
                            <img src={Germany} alt="Germany Flag" className='me-2' />
                            <span>Germany</span>
                        </li>
                        <li>
                            <MdOutlineVerifiedUser className='me-2' />                                <span>Verified </span>
                        </li>
                        <li>
                            <TfiWorld className='me-2' />                                <span> shipping</span>
                        </li>
                    </ul>
                    <div className='d-lg-inline d-none '> <button className="btn btn-primary w-100">Send inquiry</button>
                        <button className="btn btn-light w-100 border mt-2">Seller’s profile</button></div>

                </div>
                <div className='d-lg-block d-none'><button className="btn btn-light w-50 border-0 text-primary mt-1 ms-5">
                    <FaRegHeart /> Save for later
                </button>
                </div>

            </div>
        </aside>
    </>
    )
}

export default DetailsOfProduct;
