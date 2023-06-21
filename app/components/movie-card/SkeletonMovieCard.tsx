

const SkeletonMovieCard = () => {

    return (
        <div className="flex flex-col w-40 shrink-0">
            <div className="border shadow rounded-md max-w-sm w-full mx-auto">
                <div className="animate-pulse w-full">
                    <div className="relative w-full" >
                        <div className="rounded-md bg-stone-300 h-56 w-full"></div>
                        <div className="rounded-full bg-stone-400 h-10 w-10 absolute left-2 -bottom-5"></div>
                    </div>
                    <div className="flex-1 space-y-1 mt-5">
                        <div className="h-4 bg-stone-300 rounded"></div>
                        <div className="h-4 bg-stone-300 rounded"></div>
                        <div className="h-4 bg-stone-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SkeletonMovieCard