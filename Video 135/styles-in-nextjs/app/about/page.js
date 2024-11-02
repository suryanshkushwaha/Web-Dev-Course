"use client"

const page = () => {
    return (
        <>
            <div className="container">
                <h1>Hey I am a good boy</h1>
                <p>yes I am</p>

                <style jsx>
                    {`
                        .container {
                        padding: 20px;
                        background-color: red;
                        color: #333;
                        }
                        h1 {
                            color: blue;
                        }
                        p {
                        color: green;
                        }
                    `}
                </style>
            </div>
            <div className="container">
                style jsx will not be applied here cuz its used for very localised styling but if you write "style jsx global" then it will be applied globally
            </div>
        </>
    )
}

export default page