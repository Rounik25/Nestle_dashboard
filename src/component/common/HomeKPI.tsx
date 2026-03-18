type HomeKPIProps = {
  icon: string;
  title: string;
  inner?: React.ReactNode;
  button?: React.ReactNode;
  onClick?: () => void;
};

export function HomeKPI({
  icon,
  title,
  inner,
  button,
  onClick,
}: HomeKPIProps ){
    return(
        <div className="flex flex-col h-full min-h-0 w-full min-w-0 overflow-hidden bg-white rounded-2xl shadow-sm">
            <div className="flex w-full h-10 px-3 py-2">
                <img src={icon} alt="KPI Logo" />
                <div className="px-2 font-bold text-md">{title}</div>
            </div>
            <div className="flex flex-1 w-full min-w-0 min-h-0">
                {inner}
            </div>
            <div className="flex justify-end w-full min-w-0 h-10 px-2 py-1">
                <button 
                    className="px-5 bg-amber-700 text-white rounded-full"                
                    onClick={onClick}
                >
                    {button}
                </button>
            </div>
        </div>
    )
}