import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1'
import ClientFeedbackStyle2 from '@/components/Feedbacks/ClientFeedbackStyle2'
import ClientFeedbackStyle3 from '@/components/Feedbacks/ClientFeedbackStyle3'
import ClientFeedbackStyle4 from '@/components/Feedbacks/ClientFeedbackStyle4'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Feedback = () => {
    const [pageTitle, setPageTitle] = React.useState()
    React.useEffect(() => {
        const getPageTitle = async () => {
            const response = await axios.get(`${baseApiUrl}/feedback-page-title`)
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

            <ClientFeedbackStyle1 />

            <ClientFeedbackStyle3 />
            
            <div className="pb-100">
                <ClientFeedbackStyle2 />
            </div>
            
            <ClientFeedbackStyle4 />
  
            <PartnerStyle3 />
 
            <FooterStyleOne />
        </>
    )
}

export default Feedback;