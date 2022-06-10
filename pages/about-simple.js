import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import FunfactStyleOne from '@/components/Common/FunfactStyleOne'
import AppProgressStyle2 from '@/components/Common/AppProgressStyle2'
import SoftwareIntegrationsTwo from '@/components/Common/SoftwareIntegrationsTwo'
import TeamMemberStyle1 from '@/components/Common/TeamMemberStyle1'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1'
import AboutUsText from '@/components/About/AboutUsText'
import OurStats from '@/components/About/OurStats'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const AboutSimple = () => {
    const [pageTitle, setPageTitle] = React.useState()
    React.useEffect(() => {
        const getPageTitle = async () => {
            const response = await axios.get(`${baseApiUrl}/about-page-title`)
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
                    homePageText={pageTitle.home}
                    activePageText={pageTitle.activePage}
                />
            )}

            <AboutUsText />

            <FunfactStyleOne />

            <AppProgressStyle2 />

            <OurStats />

            <SoftwareIntegrationsTwo />

            <TeamMemberStyle1 />

            <PartnerStyle3 />

            <ClientFeedbackStyle1 />

            <FooterStyleOne />
        </>
    )
}

export default AboutSimple;