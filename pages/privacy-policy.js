import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
import ReactMarkdown from 'react-markdown'
 
const PrivacyPolicy = () => {

    const [privacyPolicy, setPrivacyPolicy] = React.useState()
    React.useEffect(() => {
        const getPrivacyPolicy = async () => {
            const response = await axios.get(`${baseApiUrl}/privacy-policy`)
            setPrivacyPolicy(response.data)
            // console.log(response.data)
        }
        getPrivacyPolicy()
    }, [])

    return (
        <>
            <NavbarStyleOne /> 

            {privacyPolicy && (
                <>
                    <PageBannerStyle1 
                        pageTitle={privacyPolicy.title}
                        homePageUrl={privacyPolicy.homeUrl}
                        homePageText={privacyPolicy.homeText}
                        activePageText={privacyPolicy.activePage}
                    />

                    <div className="privacy-policy-area ptb-100">
                        <div className="container">
                            <div className="privacy-policy-content">
                                <ReactMarkdown>
                                    {privacyPolicy.longDec}
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

export default PrivacyPolicy;