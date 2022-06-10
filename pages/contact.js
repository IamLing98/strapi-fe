import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Contact = () => {

    const [pageTitle, setPageTitle] = React.useState()
    React.useEffect(() => {
        const getPageTitle = async () => {
            const response = await axios.get(`${baseApiUrl}/cantact-page-title`)
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

            <ContactForm />

            <ContactInfo />
 
            <FooterStyleOne />
        </>
    )
}

export default Contact;