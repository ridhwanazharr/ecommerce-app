const TemplatePage = () => {
    return ( 
        <div className="flex flex-col p-4 gap-4">
            <div className="bg-default p-4 rounded-lg outline-2 font-semibold">This is Default</div>
            <div className="bg-primary text-primary p-4 rounded-lg outline-2 font-semibold">This is Primary</div>
            <div className="bg-warning text-warning p-4 rounded-lg outline-2 font-semibold">This is Warning</div>
            <div className="bg-danger text-danger p-4 rounded-lg outline-2 font-semibold">This is Danger</div>
            <div className="bg-success text-success p-4 rounded-lg outline-2 font-semibold">This is Success</div>
            <div className="bg-info text-info p-4 rounded-lg outline-2 font-semibold">This is Info</div>
        </div>
     );
}

export default TemplatePage;