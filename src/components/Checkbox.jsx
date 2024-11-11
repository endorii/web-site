function Checkbox({ checked, setChecked }) {
    return (
        <div
            className={`cursor-pointer flex items-center justify-center w-[32px] h-[32px] rounded-lg border-2 
        ${checked ? "bg-yellow-400 border-black" : "bg-white border-black"}`}
            onClick={() => setChecked(!checked)}
        >
            {checked && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19l12-12-1.4-1.4L9 16.2z" />
                </svg>
            )}
        </div>
    );
}

export default Checkbox;
