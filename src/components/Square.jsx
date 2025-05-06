export default function Square({ value, onSquareClick, winner }) {
  return (
    <button
      className={`${winner ? "bg-slate-300" : "bg-white"} border border-gray-300 h-18 w-18  text-2xl cursor-pointer transition-all duration-100 ease`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
