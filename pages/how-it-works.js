import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const HowItWorks = () => {

    const [worksProcess, setWorksProcess] = React.useState()
    React.useEffect(() => {
        const getWorksProcess = async () => {
            const response = await axios.get(`${baseApiUrl}/how-it-works-page-title`)
            setWorksProcess(response.data)
            // console.log(response.data)
        }
        getWorksProcess()
    }, [])

    return (
        <>
            <NavbarStyleOne /> 

            {worksProcess && (
                <>
                    <PageBannerStyle1 
                        pageTitle={worksProcess.title}
                        homePageUrl={worksProcess.homePageUrl}
                        homePageText={worksProcess.homePageText}
                        activePageText={worksProcess.activePage}
                    />

                    <div className="how-it-works-area ptb-100">
                        <div className="container">
                            {worksProcess.Steps.map(step => (
                                <div className="how-it-works-content" key={step.id}>
                                    <div className="number">
                                        {step.stepNumber}
                                    </div>
                                    
                                    <div className="row m-0">
                                        <div className="col-lg-3 col-md-12 p-0">
                                            <div className="box">
                                                <h3>{step.title}</h3>
                                                <span>{step.subTitle}</span>
                                            </div>
                                        </div>

                                        <div className="col-lg-9 col-md-12 p-0">
                                            <div className="content">
                                                <ReactMarkdown>
                                                    {step.longDec}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            <AppDownloadStyle2 />
 
            <FooterStyleOne />
        </>
    )
}

export default HowItWorks;