import Input from "./input";

const chat = () => {
    const contacts = [
        {
            name: 'Pikachu',
            status: "Interested",
            img: "/Assets/profile1.png",
        },
        {
            name: 'Bulbasaur',
            status: "Not-Interested",
            img: "/Assets/profile1.png",
        },
        {
            name: 'Squirtle',
            status: "Interested",
            img: "/Assets/profile1.png",
        },
        {
            name: 'Charmender',
            status: "Interested",
            img: "/Assets/profile1.png",
        },
        {
            name: 'Snorlax',
            status: "Not-Interested",
            img: "/Assets/profile1.png",
        },
        {
            name: 'Alakazam',
            status: "Interested",
            img: "/Assets/profile1.png",
        },
    ]
    return ( 
        <div className="w-screen flex">
            <div className='w-[25%] h-screen bg-sec-color'>
                <div className="flex items-center my-6 mx-14">
                    <div className="border border-font-color p-[2px] rounded-full">
                        <img src="/Assets/profile.png" width={50} height={50} alt="profile" />
                    </div>
                    <div className="ml-8">
                        <h3 className="text-2xl text-font-color">Deciphers</h3>
                        <p classNme="text-lg font-light text-font-color">My account</p>
                    </div>
                </div>
                <hr />
                <div className="mx-10 mt-6 ">
                    <div className="text-sec-font-color text-lg">Messages</div>
                    <div>
                        {
                            contacts.map(({ name, status, img}) =>{
                                return(
                                    <div className="flex items-center py-6 border-b border-b-font-color">
                                        <div className="cursor-pointer flex">
                                            <div className="border border-font-color p-[1px] rounded-full">
                                                <img src={img} width={45} height={45} />
                                            </div>
                                            <div className="ml-6">
                                                <h3 className="text-lg text-font-color">{name}</h3>
                                                <p className="text-sm font-light text-red-300">{status}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='w-[75%] h-screen flex flex-col items-center'>
                <div className="w-[80%] bg-font-color h-[70px] mt-10 rounded-full flex items-center px-6 py-2">
                    <div className="cursor-pointer"><img src="/Assets/profile.png" width={50} height={(50)} alt="profile"/></div>
                    <div className="ml-6 mr-auto">
                        <h3 className="text-lg">ABC</h3>
                        <p className="text-sm font-light text-gray-600">online</p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/4564/4564089.png" width={45} alt="chat" />
                    </div>
                </div>
                <div className="h-[75%] border w-full overflow-y-scroll shadow-sm">
                    <div className="h-[1000px] p-14">
                        <div className="max-w-[45%] bg-font-color rounded-b-xl rounded-tr-xl p-4 mb-6">
                            Lorem ipsum is simple dummy text of the printing and typesetting industry.
                        </div>
                        <div className="max-w-[45%] bg-sec-color rounded-b-xl rounded-tl-xl ml-auto text-sec-font-color p-4 mb-6">
                            Lorem ipsum 
                        </div>
                        <div className="max-w-[45%] bg-font-color rounded-b-xl rounded-tr-xl p-4 mb-6">
                            Lorem ipsum is simple dummy text.
                        </div>
                        <div className="max-w-[45%] bg-sec-color rounded-b-xl rounded-tl-xl ml-auto text-sec-font-color p-4 mb-6">
                            Lorem ipsum is simple dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                </div>
                <div className="p-8 w-full flex items-center ">
                    <Input placeholder="Type a message..." className="w-[90%]" inputClassName='p-2 px-4 border-0 shadow-md rounded-full bg-font-color focus:ring-0 focus:border-0 outline-none' />
                    <div className="ml-4 p-2 cursor-pointer bg-font-color rounded-full">
                        <img src="https://cdn-icons-png.flaticon.com/128/3608/3608124.png" width={30} alt="send" />
                    </div>
                </div>
            </div>
            {/* <div className='w-[25%] h-screen bg-sec-color'></div> */}
        </div>
    );
}
 
export default chat;