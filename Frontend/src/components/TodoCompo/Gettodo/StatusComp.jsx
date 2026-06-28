const StatusCompo = ({ status }) =>
  status === "pending" ? (
    <div className="py-1.5 px-6 rounded-2xl bg-amber-600/20">
      <span className="text-sm font-bold text-amber-400">Pending</span>
    </div>
  ) : (
    <div className="py-1.5 px-6 rounded-2xl bg-green-600/20">
      <span className="text-sm font-bold text-green-400">Completed</span>
    </div>
  );

export default StatusCompo;
