
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrapedComponent) => {
    return (props) => ( 
    <div>
        {props.isAdmin && <p>This is private info, Please don't share</p>}
        <WrapedComponent {...props} />
        </div>
        )
}

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" />, document.getElementById('app'))