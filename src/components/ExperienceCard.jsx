import { motion } from "framer-motion";

function ExperienceCard({ title, company_name, icon, date, points }) {
  return (
    <motion.div
      className="card bg-neutral shadow-xl border-2 border-primary  w-full mb-6"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-body flex flex-col md:flex-row items-start">
        {/* Icon */}
        <div className="flex-shrink-0 mr-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300">
            <img
              src={icon}
              alt={`${company_name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Title and Company */}
          <h2 className="card-title text-xl text-primary font-bold">{title}</h2>
          <p className="text-sm text-secondary">{company_name}</p>

          {/* Date */}
          <p className="text-sm text-gray-400 mt-1">{date}</p>

          {/* Points */}
          <ul className="list-disc list-inside mt-3 space-y-1.5 text-sm text-neutral-content">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
