import { useState } from "react";

export default function ThePlan() {
    const [show, setShow] = useState(false);

    function clickHandler() {
        setShow(!show);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <img src="/assets/basesoil.png" alt="Plan" />
            </div>
            <div className="text-center my-4">
                <h1 className="text-6xl text-crisisGreen uppercase font-bold">The Plan</h1>
            </div>
            <div>
                <img src="/assets/plan.png" alt="Plan" />
            </div>
            <div className="text-center my-4 w-4/5 flex flex-col items-center justify-center">
                <p className="mt-2 text-xl">Why are policies important?</p>
                <p>LEARN MORE</p>
                <i className="bi bi-file-arrow-down-fill cursor-pointer" onClick={clickHandler}></i>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${show ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mt-4">
                        If we act now, this crisis can be effectively reversed across the
                        globe through policies that are created to safeguard soil health.
                        Isolated individual actions are no longer sufficient to turn this
                        around. To ensure soil health, collective participation of all
                        citizens is needed, which can only be ensured by adopting the
                        necessary policies in every nation of the world.
                        <br /><br />
                        <span className="underline">Soil Revitalization - Global Policy Draft & Solutions Handbook</span>
                        <br /><br />
                        <span className="font-bold">Policy change success</span>
                        <br />
                        Story: In the mid-1970s, scientists warned that manufactured chemicals
                        such as chlorofluorocarbons or CFCs in everyday products like
                        aerosols, refrigerators, and air-conditioners were harming the ozone
                        layer (the layer of atmosphere that protects us from the sun’s
                        harmful skin-cancer-causing ultraviolet rays). In 1985, a hole was
                        confirmed in the ozone layer over Antarctica and was rapidly
                        increasing in size. The future could have been bleak with skin
                        cancers, dying plants, and damaged ecosystems worldwide. In 1987,
                        countries came together – eventually 197 in total – and agreed to
                        stop using CFCs and similar ozone-depleting chemicals by signing the
                        Montreal Protocol. This policy has led to the phasing out of 99% of
                        ozone-depleting chemicals. Today the ozone layer is recovering and
                        at current estimates, the hole will close completely around the
                        middle of this century. - *References: www.unep.org
                    </p>
                </div>
                <hr className="border-2 my-4 w-4/5"></hr>
                <div className="text-center my-4">
                    <h1 className="text-6xl text-crisisGreen uppercase font-bold">The Action</h1>
                    <p className="text-crisisGreen font-bold text-1xl mt-4">Take the message to 4 Billion people,</p><span>60% of the world electorate</span>
                </div>
            </div>
            <div>
                <img src="/assets/impact.png" alt="Plan" />
            </div>
            <div className="flex gap-2 p-4 w-4/5">
                <div className="w-1/2">
                    <p className="font-bold text-1xl"><span className="text-crisisGreen">4 billion</span> people reached</p>
                    <p className="font-bold text-1xl mt-2"><span className="text-crisisGreen">81 nations</span> are in the process of framing soil policies.</p>
                    <p className="font-bold text-1xl mt-2"><span className="text-crisisGreen">691 events</span> and interviews by Sadhguru</p>
                    <p className="font-bold text-1xl mt-2"><span className="text-crisisGreen">8970</span> media stories</p>
                    <p className="font-bold text-1xl mt-2"><span className="text-crisisGreen">50 iconic locations</span> lit up for Save Soil</p>
                    <p className="font-bold text-1xl mt-2"><span className="text-crisisGreen">1150 corporates</span> supported Save Soil</p>
                    <p className="font-bold text-1xl mt-2"><span className="text-crisisGreen">3 million children</span> wrote to their national leaders</p>
                    <p className="font-bold text-1xl mt-2"><span className="text-crisisGreen">50 North American cities</span> proclaim March 21 as “Save Soil Day”</p>
                    <p className="font-bold text-1xl mt-2"><span className="text-crisisGreen">1000+ sustainable soil management solutions</span><br></br> catalogued, <span className="text-crisisGreen">covering 193 nations</span></p>
                </div>
                <div className="w-1/2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6x8IuJlcXTk?si=a58jDAQP0JQVxSnR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <img src="/assets/supportvoice.png" alt="not found" />
                </div>
                <div className="flex justify-between flex-wrap gap-8 my-4">
                    <div className="">
                        <iframe width="520" height="315" src="https://www.youtube.com/embed/11FCyUB81rI?si=GxlxiiVMjpeSBOZN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="">
                        <iframe width="520" height="315" src="https://www.youtube.com/embed/qLTcC7srnLw?si=pWQwQj4s2jOb22Y9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="bg-[url('https://images.consciousplanet.org/save-soil/_next/static/media/let-us-make-it-happen-50.8afe6d6f.jpg?auto=format&fit=max&w=3840')]  bg-cover bg-center flex justify-center items-center w-screen h-80">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="uppercase text-6xl text-white font-bold">let us make it happen!</h1>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">ACTION NOW</button>
                </div>
            </div>
        </div>
    );
}
