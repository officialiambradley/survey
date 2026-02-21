export function SurveyCard() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] gap-8 justify-center">
            <h2>Healthcare Prescriptions Research</h2>

            <div>
                <div>
                    <span>First Name</span> <br />
                    <input type="text" className="border-[1px] border-black rounded-[5px] p-2 px-4 outline-0"/>
                </div>

                <div>
                    <span>Last Name</span> <br />
                    <input type="text" className="border-[1px] border-black rounded-[5px] p-2 px-4 outline-0"/>
                </div>
            </div>
            
            <button className="bg-[#20BCDF] text-[16px] leading-[16px] tracking-[-1px] p-4 px-8 rounded-[5px] font-bold text-white max-w-max outline-0 cursor-pointer">Submit</button>
        </div>
    );
}