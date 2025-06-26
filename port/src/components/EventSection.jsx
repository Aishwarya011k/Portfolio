import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { event } from "../data/event";

const EventSection = () => {
  return (
    <section id="events" className="py-24 px-6 bg-transparent text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-yellow-300 mb-16"
      >
        🎙️ Events & Hackathons
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {event.slice(0, 3).map((eventItem, idx) => (
          <EventCard key={idx} eventItem={eventItem} />
        ))}
      </div>

      {event.length > 3 && (
        <div className="max-w-2xl mx-auto mt-8">
          <EventCard eventItem={event[3]} />
        </div>
      )}
    </section>
  );
};

const EventCard = ({ eventItem }) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.3 }}
    className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-yellow-300/20"
  >
    {/* Top Image */}
    {eventItem.images?.[0] && (
      <img
        src={eventItem.images[0]}
        alt="Event"
        className="w-full h-48 object-cover rounded-xl mb-4 border border-white/10 shadow-md"
      />
    )}

    <h3 className="text-2xl font-semibold text-yellow-200 mb-2">
      {eventItem.title}
    </h3>

    <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mb-2">
      <div className="flex items-center gap-2">
        <FaCalendarAlt /> {eventItem.date}
      </div>
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt /> {eventItem.location}
      </div>
    </div>

    <p className="text-white/90 text-sm leading-relaxed mb-4">
      {eventItem.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {eventItem.tags.map((tag, i) => (
        <span
          key={i}
          className="bg-yellow-400/20 text-yellow-100 px-3 py-1 rounded-full text-xs"
        >
          #{tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default EventSection;

