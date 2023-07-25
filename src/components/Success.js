const Success = ({subscribe}) => {
    return (
        <div className="bg-white w-1/3 max-[800px]:w-4/5 max-[800px]:h-screen rounded-3xl max-[800px]:rounded-none mx-auto max-[800px]:justify-center p-10 flex flex-col gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="darkorange" class="w-12 h-12">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <h1 className="text-5xl font-bold">Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
            <button className="bg-blue-950 text-white w-full rounded-lg py-3 hover:bg-orange-700 max-[800px]:absolute max-[800px]:bottom-5 max-[800px]:w-56" onClick={() => subscribe(prev => !prev)}>Dismiss message</button>
        </div>
    )
}

export default Success;