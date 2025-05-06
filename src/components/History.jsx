export default function History({moves}){
    return (
        <div className="h-[50%] max-w-[228px]">
            <h1 className="mt-3 text-[1.2rem] font-semibold tracking-wide text-purple-800 text-center border-b border-gray-400  p-2">
                History of the Move
            </h1>
            <ol className="mt-3 grid grid-cols-2 gap-3 ">
                {moves}
            </ol>
        </div>
    );
}