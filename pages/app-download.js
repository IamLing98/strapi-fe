import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const AppDownload = () => {

    const [pageTitle, setPageTitle] = React.useState()
    React.useEffect(() => {
        const getPageTitle = async () => {
            const response = await axios.get(`${baseApiUrl}/app-download-page-title`)
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

            <div className="pt-100">
                <AppDownloadStyle2 />
            </div>
            
            <div className="pb-100">
                <AppDownloadStyle1 />
            </div>
             
            <PartnerStyle3 />
 
            <FooterStyleOne />
        </>
    )
}

export default AppDownload;