/* eslint-disable react/prop-types */

const Sidebar = ({totleCalorie,totleTime,recipeQueue, handleRemove, preparedRecipe,calculateTimeandCalories }) => {
    return (
        <div className="md:w-1/3 pt-10 border-2 rounded-2xl text-gray-600  bg-base-200 mt-10">
            <p className="font-bold text-xl text-center">Want to Cook: {recipeQueue.length}</p>
            <hr />
            {/*  */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeQueue.map((require, index) => (
                            <tr className='hover' key={index}>
                                <th>{index + 1}</th>
                                <th>{require.id}</th>
                                <th>{require.name}</th>
                                <td>{require.prep_time}</td>
                                <td>{require.calories}</td>
                        <td><button onClick={() => {handleRemove(require.id) 
                        calculateTimeandCalories(require.prep_time,require.calories)

                        }} className="px-6 py-2 text-base rounded-3xl bg-green-400">Preparing</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/*  */}
            <p className="font-bold text-xl text-center pt-4">Currentiy Cooking: {preparedRecipe.length}</p>
            <hr />
            {/*  */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preparedRecipe.map((require, index) => (
                            <tr className='hover' key={index}>
                                <th>{index + 1}</th>
                                <th>{require.id}</th>
                                <th>{require.name}</th>
                                <td>{require.prep_time}</td>
                                <td>{require.calories}</td>
                            </tr>
                        ))}
                        <tr className="border-none">
                            <th></th>
                            <th></th>
                            <th></th>
                            <td>Total Time={totleTime}</td>
                            <td>Total Calore={totleCalorie}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sidebar;