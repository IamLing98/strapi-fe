import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Gallery = () => {

    const [gallery, setGallery] = React.useState()
    React.useEffect(() => {
        const getGallery = async () => {
            const response = await axios.get(`${baseApiUrl}/gallery`)
            setGallery(response.data)
            // console.log(response.data)
        }
        getGallery()
    }, [])

    return (
        <>
            <NavbarStyleOne /> 

            {gallery && (
                <>
                    <PageBannerStyle1 
                        pageTitle={gallery.title}
                        homePageUrl={gallery.homeUrl}
                        homePageText={gallery.homeText}
                        activePageText={gallery.activePageText}
                    />

                    <div className="gallery-area pt-100 pb-75">
                        <div className="container">
                            <div className="row justify-content-center">
                                {gallery.galleryImages.map(item => (
                                    <div className="col-lg-4 col-sm-6 col-md-6" key={item.id}>
                                        <div className="single-gallery-item">
                                            <img src={item.image.url} alt={item.image.alternativeText} />
                                        </div>
                                    </div>
                                ))}
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

export default Gallery;