import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function NotFoundPage(){

    let location = useLocation()
    console.log(location)


    let navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/products')
        }, 5000)
    }, [])

    return(
        <div className="not_found">
            <button className="btn" onClick={() => navigate('/products')}>Go to Prod List</button>
            <img src="https://img.freepik.com/free-vector/404-error-template-flat-style_23-2147757687.jpg?t=st=1730133312~exp=1730136912~hmac=861fd0184a5df98bbc9c53e4df464d69a19a20ce87fcde03362c38b39082377e&w=740"/>
        </div>
    )
}

export default NotFoundPage
