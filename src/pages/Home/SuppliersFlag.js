import React from 'react';
import '../../assets/css/main.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive'; // للتحقق من حجم الشاشة
import Arabic from '../../assets/Flag/Emarat.png';
import AU from '../../assets/Flag/Austurali.png';
import DK from '../../assets/Flag/Denemark.png';
import FR from '../../assets/Flag/Franc.png';
import GB from '../../assets/Flag/Almania.png';
import Italia from '../../assets/Flag/italia.png';
import Ru from '../../assets/Flag/Russia.png';
import US from '../../assets/Flag/Amerca.png';
import China from '../../assets/Flag/china.png';

const suppliers = [
    { country: 'Arabic Emirates', url: 'shopname.ae', flag: Arabic },
    { country: 'Australia', url: 'shopname.ae', flag: AU },
    { country: 'United States', url: 'shopname.ae', flag: US },
    { country: 'Russia', url: 'shopname.ru', flag: Ru },
    { country: 'Italy', url: 'shopname.it', flag: Italia },
    { country: 'Denmark', url: 'denmark.com.dk', flag: DK },
    { country: 'France', url: 'shopname.com.fr', flag: FR },
    { country: 'Arabic Emirates', url: 'shopname.ae', flag: Arabic },
    { country: 'China', url: 'shopname.ae', flag: China },
    { country: 'Great Britain', url: 'shopname.co.uk', flag: GB },
];

const SuppliersFlag = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // حجم الشاشة للموبايل

    return (
        <div className="suppliers-container text-black">
            <h3 className='text-black'>Suppliers by region</h3>
            {isMobile ? (
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2} // عدد العناصر في الشاشة الواحدة
                    pagination={{ clickable: true }} // إظهار الفقاعات للتنقل
                >
                    {suppliers.map((supplier, index) => (
                        <SwiperSlide key={index}>
                            <div className="supplier-item">
                                <img
                                    src={supplier.flag}
                                    alt={`${supplier.country} flag`}
                                    className="flag"
                                />
                                <div className="supplier-info">
                                    <span>{supplier.country}</span>
                                    <a href={`https://${supplier.url}`} target="_blank" rel="noopener noreferrer">
                                        {supplier.url}
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="suppliers-list">
                    {suppliers.map((supplier, index) => (
                        <div key={index} className="supplier-item">
                            <img
                                src={supplier.flag}
                                alt={`${supplier.country} flag`}
                                className="flag"
                            />
                            <div className="supplier-info">
                                <span>{supplier.country}</span>
                                <a href={`https://${supplier.url}`} target="_blank" rel="noopener noreferrer">
                                    {supplier.url}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SuppliersFlag;
