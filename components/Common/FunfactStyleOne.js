import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const FunfactStyleOne = () => {

    const [funfact, setFunfact] = React.useState()

    React.useEffect(() => {
        const getFunfact = async () => {
            const response = await axios.get(`${baseApiUrl}/funfact-style-one`)
            setFunfact(response.data)
            
            // console.log(response.data)
        }

        getFunfact()
    }, [])

    return (
        <>
            <div className="funfacts-area pb-75">
                <div className="container">
                    {funfact && (
                        <div className="row justify-content-center">  
                            {funfact.funfacts.map(funfactList => (
                                <div className="col-lg-3 col-sm-6 col-md-6" key={funfactList.id}>
                                    <div className={funfactList.BgClass}>
                                        <div className="icon">
                                            <i className={funfactList.icon}></i>
                                        </div>
                                        <p>{funfactList.title}</p>
                                        <h3>
                                            {funfactList.number}<span className="sign">{funfactList.sign}</span>
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FunfactStyleOne;