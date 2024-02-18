interface revenueProps{
    values:number,
    statement:string
} 
const RevenueNumber = (props:revenueProps) => {
  return (
    <div className="p-2">
      <h3 className="font-bold text-3xl">{props.values}%</h3>
      <p className="text-sm font-medium text-slate-700">
        {props.statement}
      </p>
    </div>
  );
};

export default RevenueNumber;
