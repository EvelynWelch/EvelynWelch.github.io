const pageHeader = function(props) {
    const data = props.pageHeaderData
    const pageHeaderTitle = data.pageHeadertitle
    return 
        <div className="pageHeader">
            <header className="pageHeader">
                <h1 className="pageHeader">{pageHeaderTitle}</h1>
            </header>
        </div>    
}