import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Team = () => {
    // Team Page Title
    const [pageTitle, setPageTitle] = React.useState()
    React.useEffect(() => {
        const getPageTitle = async () => {
            const response = await axios.get(`${baseApiUrl}/team-page-title`)
            setPageTitle(response.data)
            // console.log(response.data)
        }
        getPageTitle()
    }, [])

    // Team Members
    const [teamMember, setTeamMember] = React.useState()
    React.useEffect(() => {
        const getTeamMember = async () => {
            const response = await axios.get(`${baseApiUrl}/team-member`)
            setTeamMember(response.data)
            // console.log(response.data)
        }
        getTeamMember()
    }, [])

    return (
        <>
            <NavbarStyleOne /> 

            {pageTitle && (
                <PageBannerStyle1 
                    pageTitle={pageTitle.title}
                    homePageUrl={pageTitle.homePageUrl}
                    homePageText={pageTitle.homePage}
                    activePageText={pageTitle.activePage}
                />
            )}

            <div className="team-area pt-100 pb-75">
                <div className="container">
                    {teamMember && (
                        <div className="row justify-content-center">
                            {teamMember.teamMembers.map(member => (
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" key={member.id}>
                                    <div className="single-team-box">
                                        <div className="image">
                                            <div 
                                                style={{ 
                                                    backgroundImage: `url(${member.image.url})` 
                                                }}
                                            ></div>
                                        </div>
                                        <div className="content">
                                            <h3>{member.name}</h3>
                                            <span>{member.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <PartnerStyle3 />
  
            <FooterStyleOne />
        </>
    )
}

export default Team;