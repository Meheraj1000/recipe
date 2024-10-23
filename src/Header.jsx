const Header = () => {
    return (
        <div >
            <div className=" flex justify-around pt-3">
                <div>
                    <h1 className="font-bold text-xl">Recipe Calories</h1>
                </div>
                <div>
                    <div className="flex gap-3 font-semibold text-base">
                        <a className=""href="">Home</a>   
                        <a className="" href="">Recipe</a>
                        <a className="" href="">About</a>
                        <a className="" href="">Search</a>
                    </div>
                </div>
                <div>
                    <div className="flex">
                    <input className="w-full h-6 bg-slate-300 rounded-2xl pl-2" type="text" placeholder="Search"/>
                    <div className=" ml-2 rounded-full">
                        <i className='fa-regular fa-user-circle text-xl'></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;