import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const Careers = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);

    // ⚡ instant UI (prevents empty screen)
    const instantNews = [
      {
        title: "Loading latest technology news...",
        description: "Please wait while we fetch real-time updates.",
        url: "#",
        image: "https://source.unsplash.com/800x500/?technology",
      },
      {
        title: "AI and Cloud trends updating...",
        description: "Refreshing global tech insights for you.",
        url: "#",
        image: "https://source.unsplash.com/800x500/?ai",
      },
    ];

    setNews(instantNews);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 7000);

      const res = await fetch(
        `https://gnews.io/api/v4/search?q=technology OR AI OR cloud OR blockchain OR cybersecurity OR devops&lang=en&max=15&apikey=5c6e2eefd3cc04ec593f1e01b269c446`,
        { signal: controller.signal }
      );

      clearTimeout(timeout);

      const data = await res.json();

      if (data?.articles?.length > 0) {
        setNews(data.articles); // replace instantly
      }
    } catch (err) {
      console.log("API failed, using instant content only");
      // no error, no empty UI
    } finally {
      setLoading(false);
    }
  };

  const mapToSkill = (title = "") => {
    const t = title.toLowerCase();
    if (t.includes("blockchain")) return "Blockchain";
    if (t.includes("ai")) return "AI";
    if (t.includes("data")) return "Data Science";
    if (t.includes("cloud")) return "Cloud";
    if (t.includes("security")) return "Cybersecurity";
    if (t.includes("devops")) return "DevOps";
    return "Technology";
  };

  const generateInsight = (title = "") => {
    const skill = mapToSkill(title);
    return `AI Insight: ${skill} is trending globally.`;
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-black px-6 py-4 font-serif">

      {/* HEADER */}
      <div className="text-center border-b-4 border-black pb-4 mb-8">
        <h1 className="text-5xl font-bold tracking-wide">
          PREDDY TIMES
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Daily Tech Newspaper • {new Date().toDateString()}
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500">
          Loading news...
        </p>
      )}

      {/* CONTENT */}
      {!loading && (
        <>
          {/* HERO */}
          {news[0] && (
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="max-w-6xl mx-auto mb-10 grid md:grid-cols-2 gap-6 border-b pb-6"
            >
              <div className="relative overflow-hidden rounded">

                <div className="absolute top-2 left-2 z-10 bg-black text-white text-xs px-3 py-1 rounded">
                  {mapToSkill(news[0].title)}
                </div>

                <img
                  src={news[0].image}
                  alt="news"
                  className="w-full h-64 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-2">{news[0].title}</h2>

                <p className="text-sm text-red-600 font-semibold mb-2">
                  {mapToSkill(news[0].title)}
                </p>

                <p className="text-gray-800 mb-3">{news[0].description}</p>

                <p className="text-xs italic text-gray-500 mb-3">
                  {generateInsight(news[0].title)}
                </p>

                <a
                  href={news[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline"
                >
                  Read Full Story →
                </a>
              </div>
            </motion.div>
          )}

          {/* ARTICLES */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {news.slice(1).map((article, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition bg-white"
              >
                <div className="relative">

                  <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    {mapToSkill(article.title)}
                  </div>

                  <img
                    src={article.image}
                    alt="news"
                    className="w-full h-40 object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{article.title}</h3>

                  <p className="text-sm text-gray-700 mb-2">
                    {article.description?.slice(0, 100)}...
                  </p>

                  <p className="text-xs italic text-gray-500 mb-2">
                    {generateInsight(article.title)}
                  </p>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 text-sm underline"
                  >
                    Read →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* FOOTER */}
      <div className="text-center mt-16 border-t pt-6 text-gray-600">
        Stay updated. Technology evolves daily — learning never stops.
      </div>

      {/* BACK */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
        >
          <IoMdArrowBack /> Go Back
        </button>
      </div>
    </div>
  );
};

export default Careers;