import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import PricingPlanStyle1 from '@/components/PricingPlan/PricingPlanStyle1'
import PartnerStyle2 from '@/components/Common/PartnerStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Pricing = () => {

    const [pageTitle, setPageTitle] = React.useState()
    React.useEffect(() => {
        const getPageTitle = async () => {
            const response = await axios.get(`${baseApiUrl}/pricing-page-title`)
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
                    activePageText={pageTitle.activePageText}
                />
            )}

            <PartnerStyle2 />

            <PricingPlanStyle1 />

            <div className="pt-100">
                <AppDownloadStyle2 />
            </div>
            
            <FooterStyleOne />
        </>
    )
}

export default Pricing;