import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import baseApiUrl from '@/utils/baseApiUrl'

const AppProgressStyle1 = () => {

    const [progress, setProgress] = React.useState()
    React.useEffect(() => {
        const getProgress = async () => {
            const response = await axios.get(`${baseApiUrl}/app-progress`)
            setProgress(response.data)
            // console.log(response.data)
        }
        getProgress()
    }, [])

    return (
        <>
            <div className="app-progress-area ptb-100">
                {progress && (
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="app-progress-image text-center">
                                    <img 
                                        src={progress.image.url} 
                                        alt={progress.image.alternativeText} 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="app-progress-content">
                                    <span className="sub-title">{progress.subTitle}</span>

                                    <h2>{progress.title}</h2>

                                    <ReactMarkdown>
                                        {progress.descriptionText}
                                    </ReactMarkdown>
  
                                    <Link href={progress.btnUrl}>
                                        <a className="default-btn">{progress.btnText}</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default AppProgressStyle1;