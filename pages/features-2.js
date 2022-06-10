import React from 'react'
import NavbarStyleThree from '@/components/_App/NavbarStyleThree'
import PageBannerStyle3 from '@/components/Common/PageBannerStyle3'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Features2 = () => {

    // Page Title
    const [pageTitle, setPageTitle] = React.useState()
    React.useEffect(() => {
        const getPageTitle = async () => {
            const response = await axios.get(`${baseApiUrl}/features-page-title`)
            setPageTitle(response.data)
            // console.log(response.data)
        }
        getPageTitle()
    }, [])

    // Features
    const [feature, setFeature] = React.useState()
    React.useEffect(() => {
        const getFeature = async () => {
            const response = await axios.get(`${baseApiUrl}/features`)
            setFeature(response.data)
            // console.log(response.data)
        }
        getFeature()
    }, [])

    return (
        <>
            <NavbarStyleThree /> 
 
            {pageTitle && (
                <PageBannerStyle3 
                    pageTitle={pageTitle.title}
                    homePageUrl={pageTitle.homeUrl}
                    homePageText={pageTitle.homeText}
                    activePageText={pageTitle.activePage}
                />
            )}

            <div className="features-area pt-100 pb-75">
                <div className="container">
                    {feature && (
                        <div className="row justify-content-center">
                            {feature.lists.map(list => (
                                <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100" key={list.id}>
                                    <div className="single-features-box">
                                        <div className={list.iconBgClass}>
                                            <i className={list.icon}></i>
                                        </div>
                                        <h3>{list.title}</h3>
                                        <p>{list.shortDec}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
 
            <AppDownloadStyle2 />
          
            <FooterStyleOne />
        </>
    )
}

export default Features2;