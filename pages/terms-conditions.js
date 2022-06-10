import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
import ReactMarkdown from 'react-markdown'
 
const TermsConditions = () => {

    const [terms, setTerms] = React.useState()
    React.useEffect(() => {
        const getTerms = async () => {
            const response = await axios.get(`${baseApiUrl}/terms-and-conditions`)
            setTerms(response.data)
            // console.log(response.data)
        }
        getTerms()
    }, [])

    return (
        <>
            <NavbarStyleOne /> 

            {terms && (
                <>
                    <PageBannerStyle1 
                        pageTitle={terms.title}
                        homePageUrl={terms.homeUrl}
                        homePageText={terms.homeText}
                        activePageText={terms.activePage}
                    />

                    <div className="terms-conditions-area ptb-100">
                        <div className="container">
                            <div className="terms-conditions-content">
                                <ReactMarkdown>
                                    {terms.longText}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <AppDownloadStyle2 />
 
            <FooterStyleOne />
        </>
    )
}

export default TermsConditions;