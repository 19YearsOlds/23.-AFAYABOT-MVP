import React from "react";

const LandingPage = () => {
    return (
        <div className="text-center p-6 bg-gray-100 min-h-[40vh]">
            <img src="/placeholder-logo.png" alt="AfyaBot Logo" className="h-16 mx-auto" />
            <h1 className="text-3xl font-bold mt-4">AfyaBot Africa</h1>
            <p className="text-lg mt-2 max-w-xl mx-auto">
                Helping underserved African communities get simple health guidance.
            </p>
            <p className="text-sm mt-4 text-gray-600">
                Demo: Speak or type your age, gender, and symptoms to get suggestions.
            </p>
        </div>
    );
};

export default LandingPage;