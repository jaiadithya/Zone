'use client'

import React, { useState } from 'react'
import Gallery from '../product/Gallery';
import Specs from '../product/Specs';
import Desc from '../product/Desc';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Gallery');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className=''>
            <ul className="flex flex-wrap text-sm font-regular text-center text-gray-500 ">
                <li className="me-2">
                    <a
                        href="#"
                        className={`inline-block px-4 py-3 ${activeTab === 'Gallery' ? 'text-white bg-gray-800 rounded-lg' : 'rounded-lg hover:text-gray-900 hover:bg-gray-100'}`}
                        onClick={() => handleTabClick('Gallery')}
                        aria-current={activeTab === 'Gallery' ? 'page' : undefined}
                    >
                        Gallery
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className={`inline-block px-4 py-3 ${activeTab === 'Specifications' ? 'text-white bg-gray-800 rounded-lg' : 'rounded-lg hover:text-gray-900 hover:bg-gray-100'}`}
                        onClick={() => handleTabClick('Specifications')}
                    >
                        Specifications
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className={`inline-block px-4 py-3 ${activeTab === 'Information' ? 'text-white bg-gray-800 rounded-lg' : 'rounded-lg hover:text-gray-900 hover:bg-gray-100'}`}
                        onClick={() => handleTabClick('Information')}
                    >
                        Information
                    </a>
                </li>
            </ul>

            {/* Content based on selected tab */}
            {activeTab === 'Gallery' && <GalleryContent />}
            {activeTab === 'Specifications' && <SpecificationsContent />}
            {activeTab === 'Information' && <InformationContent />}
        </div>
    );
};

const GalleryContent = () => {
   return <div> <Gallery/> </div>;
   
};

const SpecificationsContent = () => {
    return <div> <Specs/> </div>;
};

const InformationContent = () => {
    return <div> <Desc/> </div>;
};

export default Tabs;
