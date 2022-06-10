import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import baseApiUrl from '@/utils/baseApiUrl'

const SoftwareIntegrations = () => {
    const [integrations, setIntegrations] = React.useState()
    React.useEffect(() => {
        const getIntegrations = async () => {
            const response = await axios.get(`${baseApiUrl}/software-integrations`)
            setIntegrations(response.data)
            // console.log(response.data)
        }
        getIntegrations()
    }, [])

    return (
        <>
            <div className="software-integrations-area ptb-100">
                <div className="container">
                    {integrations && (
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="software-integrations-content">
                                    <span className="sub-title">
                                        {integrations.subTitle}
                                    </span>

                                    <h2>{integrations.title}</h2>

                                    <ReactMarkdown>
                                        {integrations.longDec}
                                    </ReactMarkdown>

                                    <Link href={integrations.btnUrl}>
                                        <a className="default-btn">{integrations.btnText}</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="software-integrations-list">
                                        <img src="/images/shape/bg-shape2.png" alt="bg-shape" />

                                        <ul>
                                            <li>
                                                <img 
                                                    src={integrations.softwareImg1.url} 
                                                    className="atlassian" 
                                                    alt={integrations.softwareImg1.alternativeText} 
                                                />
                                            </li>
                                            <li> 
                                                <img 
                                                    src={integrations.softwareImg2.url} 
                                                    className="skype" 
                                                    alt={integrations.softwareImg2.alternativeText} 
                                                />
                                            </li>
                                            <li>
                                                <img 
                                                    src={integrations.softwareImg3.url} 
                                                    className="gdrive" 
                                                    alt={integrations.softwareImg3.alternativeText} 
                                                />
                                            </li>
                                            <li>
                                                <img 
                                                    src={integrations.softwareImg4.url} 
                                                    className="slack" 
                                                    alt={integrations.softwareImg4.alternativeText} 
                                                />
                                            </li>
                                            <li>
                                                <img 
                                                    src={integrations.softwareImg5.url} 
                                                    className="jira" 
                                                    alt={integrations.softwareImg5.alternativeText} 
                                                />
                                            </li>
                                            <li>
                                                <img 
                                                    src={integrations.softwareImg6.url} 
                                                    className="frame" 
                                                    alt={integrations.softwareImg6.alternativeText} 
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    )}
                </div>

                <div className="shape6">
                    <img src="/images/shape/shape5.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default SoftwareIntegrations;