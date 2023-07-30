import React from "react"
import { StringLiteral } from "typescript"

interface Props {
    headerTitle: string,

}

const PageHeader = function(props: Props) {
    const pageHeaderTitle = props.headerTitle
    return 
        <div className="pageHeader">
            <header>
                <h1>{pageHeaderTitle}</h1>
            </header>
        </div>    
}

export default PageHeader