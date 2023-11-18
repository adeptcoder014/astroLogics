export const SearchBar = () => {
    return (
        <div style={{
            padding: "5%",
        }}>

            <h1 className="h1  h1Responsive">Identify a unique events</h1>
            <div className="search-container ">

                <input type="text" placeholder="Search .." />
                {/* <button className="">Press</button> */}
            </div>
        </div>
    )
}