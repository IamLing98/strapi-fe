import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import KeyFeatures from '@/components/HomeDemo1/KeyFeatures'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Services = () => {

    const [services, setServices] = React.useState()
    React.useEffect(() => {
        const getServices = async () => {
            const response = await axios.get(`${baseApiUrl}/services`)
            setServices(response.data)
            // console.log(response.data)
        }
        getServices()
    }, [])

    return (
        <>
            <NavbarStyleOne /> 

            {services && (
                <>
                    <PageBannerStyle1 
                        pageTitle={services.title}
                        homePageUrl={services.homeUrl}
                        homePageText={services.homeText}
                        activePageText={services.activePage}
                    />

                    <div className="features-area pt-100 pb-75">
                        <div className="container">
                            <div className="row justify-content-center">
                                {services.services.map(item => (
                                    <div className="col-lg-4 col-6 col-md-6 xsw-100" key={item.id}>
                                        <div className="features-item">
                                            <div className={item.iconBgCalss}>
                                                <i className={item.icon}></i>
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{item.shortDec}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            <KeyFeatures />

            <div className="ptb-100">
                <AppDownloadStyle1 />
            </div>
 
            <FooterStyleOne />
        </>
    )
}

export default Services;