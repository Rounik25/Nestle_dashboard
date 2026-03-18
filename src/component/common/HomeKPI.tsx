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
}: HomeKPIProps ){
    return(
        <div className="flex flex-col h-full min-h-0 w-full min-w-0 overflow-hidden bg-white rounded-2xl shadow-md">
            <div className="flex w-full min-h-8 px-3 py-2">
                <div className="flex h-8 pb-2">
                    <img src={icon} alt="KPI Logo"/>
                </div>
                <div className="flex flex-wrap px-2 font-bold text-md">{title}</div>
            </div>
            <div className="flex flex-1 w-full min-w-0 min-h-0">
                {inner}
            </div>
            {/* <div className="flex justify-end w-full min-w-0 px-2 py-1">
                <button 
                    className="px-3 bg-amber-700 shadow-sm hover:bg-amber-600 text-white rounded-full"                
                    onClick={onClick}
                >
                    {button}
                </button>
            </div> */}
        </div>
    )
}