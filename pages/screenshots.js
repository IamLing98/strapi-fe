import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppScreenshotsStyle1 from '@/components/AppScreenshots/AppScreenshotsStyle1'
import AppScreenshotsStyle3 from '@/components/AppScreenshots/AppScreenshotsStyle3'
import AppScreenshotsStyle5 from '@/components/AppScreenshots/AppScreenshotsStyle5'
import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Screenshots = () => {

    const [pageTitle, setPageTitle] = React.useState()
    React.useEffect(() => {
        const getPageTitle = async () => {
            const response = await axios.get(`${baseApiUrl}/screenshots-page-title`)
            setPageTitle(response.data)
            // console.log(response.data)
        }
        getPageTitle()
    }, [])

    return (
        <>
            <NavbarStyleOne /> 

            {pageTitle && (
                <PageBannerStyle1 
                    pageTitle={pageTitle.title}
                    homePageUrl={pageTitle.homeUrl}
                    homePageText={pageTitle.homeText}
                    activePageText={pageTitle.activePage}
                />
            )}

            <AppScreenshotsStyle1 />

            <SoftwareIntegrations />
 
            <AppScreenshotsStyle3 />

            <div className="pt-100">
                <AppScreenshotsStyle5 />
            </div>
  
            <div className="ptb-100">
                <AppDownloadStyle1 />
            </div>
 
            <FooterStyleOne />
        </>
    )
}

export default Screenshots;