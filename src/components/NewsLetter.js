import { useState } from 'react';
import image from '../images/illustration-sign-up-desktop.svg';

const NewsLetter = ({subscribe}) => {
    const [email, setEmail] = useState("");

    const handleEmailInput = (e) => {
        const {value} = e.target;
        setEmail(prev => (value));
    }

    const handleSubmit = () => {
        if (email === null || email === undefined || email === '' || email === ' ') {
            return alert('please enter an email address');
        }

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!email.match(validRegex)) {
            return alert('please enter a valid email address');
        }

        subscribe(prev => !prev);
    }

    return (
        <div className="w-3/4 max-[800px]:w-4/5 max-[800px]:my-10 bg-white p-5 max-[800px]:p-0 rounded-3xl mx-auto">
            <div className="flex max-[800px]:flex-col-reverse">

                <div className="p-10 px-12 max-[800px]:p-2 max-[800px]:px-3 w-1/2 max-[800px]:w-full">
                    <h2 className="text-5xl max-[800px]:text-3xl font-bold leading-loose">Stay Updated!</h2>
                    <p className="text-xl max-[800px]:text-lg my-5">Join 60,000+ product managers receiving monthly updates on:</p>
                    <p className="flex gap-5 max-[800px]:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="darkorange" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        Product discovery and building what matters
                    </p>
                    <p className="flex gap-5 max-[800px]:gap-2 my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="darkorange" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        Measuring to ensure updates are a success
                    </p>
                    <p className="flex gap-5 max-[800px]:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="darkorange" className="w-6 h-6" >
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        And much more!
                    </p>
                    <div className="flex flex-col gap-5 max-[800px]:gap-2 my-10">
                        <label>Email Address</label>
                        <input value={email} onChange={(e) => handleEmailInput(e)} type="email" name="email" placeholder="email@company.com" className="border-gray-400 border-2 rounded-lg py-3 px-5 focus:outline-none focus:border-black" />
                        <button className="rounded-lg bg-gray-700 text-white font-bold w-full py-3 hover:bg-orange-700" onClick={handleSubmit}>Subscribe to monthly newslettter</button>
                    </div>
                </div>
                <div className="w-1/2 max-[800px]:w-full max-[800px]:p-0">
                    <img src={image} alt="bg" className='mx-auto max-[800px]:-mt-56' />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;