import { RevealOnScroll } from "../components/RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Core Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img src="/quote-manager.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"/>
              <h3 className="text-xl font-bold mb-2">Quote Generator</h3>
              <p className="text-gray-400 mb-4">
                Generate Famous Quotes and share with friends and family. Save and update your favorite quotes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vercel", "Hostinger","React.js", "Tailwind", "Laravel", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://quote-manager-frontend-544n.vercel.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Demo →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img src="/hrms.png" alt="Project 1" className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"/>
              <h3 className="text-xl font-bold mb-2">Human Resource System</h3>
              <p className="text-gray-400 mb-4">
                HR management system with Attendance tracking, CRM and Payroll.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vue.js","Bootstrap", "PHP", "Laravel", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Demo →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img src="/booking-app.png" alt="Project 1" className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"/>
              <h3 className="text-xl font-bold mb-2">Booking Appointment App</h3>
              <p className="text-gray-400 mb-4">
                Mobile app for patient booking appointments with doctors, clinics and discuss about illness.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Filament","Laravel", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Demo →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img src="/inventory.png" alt="Project 1" className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"/>
              <h3 className="text-xl font-bold mb-2">Stock Management System</h3>
              <p className="text-gray-400 mb-4">
                Managing the stock, purchase product, supplier, customer and generate report.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Tailwind", "Laravel", "google auth", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Demo →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <img src="/cms.png" alt="Project 1" className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"/>
              <h3 className="text-xl font-bold mb-2">Content Management System</h3>
              <p className="text-gray-400 mb-4">
                Managing the content of company profile website, blog, news and event.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "SQLite", "Paylaod CMS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Demo →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img src="/job-seeking.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"/>
              <h3 className="text-xl font-bold mb-2">Scholarship and Job Seeking Website</h3>
              <p className="text-gray-400 mb-4">
                Allow student and employee to apply for scholarship and job, and company to post job.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Flask", "React", "AWS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Demo →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img src="/telegram-project.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"/>
              <h3 className="text-xl font-bold mb-2">Telegram Bot Notification</h3>
              <p className="text-gray-400 mb-4">
                Product added to stock, The notification will be send to stock Manager via telegram bot.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Laravel", "Bot Father",].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Demo →
                </a>
              </div>
            </div>
            
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img src="/e-com-web.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"/>
              <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
              <p className="text-gray-400 mb-4">
                E-commerce website with a modern UI and product listing, cart and checkout features
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Javascript", "Jquery"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://kimleang7.github.io/FreshDailyRestuarant"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Demo →
                </a>
              </div>
            </div>


   
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};