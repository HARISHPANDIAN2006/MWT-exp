import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5024/api/userprofile/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user profile:", err));
  }, [userId]);

  if (!user) {
    return (
      <p className="text-center mt-20 text-gray-500 animate-pulse">
        Loading profile...
      </p>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-indigo-100 min-h-screen py-12 px-6">
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-2 -mt-8 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition fixed"
      >
        ← Back
      </motion.button>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/70 shadow-2xl rounded-3xl p-10 max-w-4xl mx-auto border border-gray-200"
      >
        <div className="flex flex-col items-center">
          <motion.img
            src={user.image || "https://via.placeholder.com/150"}
            alt={user.name}
            className="w-36 h-36 rounded-full object-cover border-4 border-indigo-300 shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900">
            {user.name}
          </h1>
          <p className="text-lg text-gray-600 mt-1">
            {user.profession || "Freelancer"}
          </p>
          <div className="mt-2 text-yellow-500 text-xl">
            ⭐ {user.rating} / 5
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-indigo-50 p-5 rounded-xl shadow-md"
          >
            <h2 className="font-semibold text-lg mb-2">Contact</h2>
            <p>📞 {user.phone || "N/A"}</p>
            <p>📧 {user.email || "N/A"}</p>
            <p>📍 {user.location || "Not specified"}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-indigo-50 p-5 rounded-xl shadow-md"
          >
            <h2 className="font-semibold text-lg mb-2">Availability</h2>
            <p>{user.availability}</p>
            <p>Experience: {user.experience} years</p>
            <p>Completed Projects: {user.completedProjects}</p>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white/80 p-6 rounded-xl shadow"
        >
          <h2 className="font-semibold text-lg mb-2">About</h2>
          <p>{user.description || "No description available"}</p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <h2 className="font-semibold text-lg mb-2">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {user.skills?.length > 0 ? (
              user.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full shadow-sm text-sm"
                >
                  {skill}
                </motion.span>
              ))
            ) : (
              <p>No skills added</p>
            )}
          </div>
        </motion.div>

        {/* Education */}
        {user.education?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <h2 className="font-semibold text-lg mb-2">Education</h2>
            <ul className="list-disc ml-5 space-y-1">
              {user.education.map((edu, idx) => (
                <li key={idx}>
                  {edu.degree} - {edu.institution} ({edu.year})
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <h2 className="font-semibold text-lg mb-2">Projects</h2>
          <ul className="space-y-3">
            {user.projects?.length > 0 ? (
              user.projects.map((proj, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <h3 className="font-bold">{proj.title}</h3>
                  <p className="text-sm text-gray-600">{proj.description}</p>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 text-sm underline"
                    >
                      View Project
                    </a>
                  )}
                </motion.li>
              ))
            ) : (
              <p>No projects yet</p>
            )}
          </ul>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <h2 className="font-semibold text-lg mb-2">Reviews</h2>
          {user.reviews?.length > 0 ? (
            user.reviews.map((review, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="border p-4 rounded-lg mb-3 bg-white shadow"
              >
                <p className="text-gray-700">"{review.comment}"</p>
                <span className="text-sm text-gray-500">
                  - {review.reviewer} ⭐ {review.rating}
                </span>
              </motion.div>
            ))
          ) : (
            <p>No reviews yet</p>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex gap-6 justify-center"
        >
          {user.linkedin && (
            <a
              href={user.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:scale-110 transition text-lg"
            >
              🔗 LinkedIn
            </a>
          )}
          {user.github && (
            <a
              href={user.github}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:scale-110 transition text-lg"
            >
              💻 GitHub
            </a>
          )}
          {user.website && (
            <a
              href={user.website}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:scale-110 transition text-lg"
            >
              🌐 Website
            </a>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
