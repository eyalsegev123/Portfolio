const TimelineItem = ({ title, company, period, tech, description, isLast }) => (
  <div className="relative pl-8">
    {/* Vertical rail */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-cyan/20" />
    {/* Cyan dot */}
    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-cyan" />
    {!isLast && <div className="absolute left-[-4px] bottom-0 w-2 h-2 rounded-full bg-cyan/20" />}

    <div className="glass rounded-xl p-5 mb-6">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-cyan/80 text-sm font-medium">{company}</p>
        </div>
        <span className="text-white/40 text-xs font-mono mt-1">{period}</span>
      </div>
      <p className="text-white/60 text-sm leading-relaxed mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="font-mono text-xs bg-cyan/10 border border-cyan/20 text-cyan/80 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TimelineItem;
