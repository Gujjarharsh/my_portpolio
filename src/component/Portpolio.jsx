import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Code2, Sparkles, Download, ExternalLink, Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Portfolio() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
    };
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Harsh_Tawar_Resume.pdf";
        link.download = "Harsh_Tawar_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="min-h-screen bg-black text-gray-100 overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="fixed inset-0 pointer-events-none">
                <div
                    className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                    style={{
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                        transition: "all 0.3s ease-out"
                    }}
                />
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            {/* Navigation Bar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 px-6 md:px-20 py-6 backdrop-blur-md bg-black/30 border-b border-gray-800/50"
            >
                <div className="flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
                        onClick={() => scrollToSection('home')}
                    >
                        H.T
                    </motion.div>
                    <div className="hidden md:flex gap-8">
                        {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                            </button>
                        ))}
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2" onClick={handleDownload}>
                        <Download className="w-4 h-4" />
                        Resume
                    </button>
                </div>
            </motion.nav>

            <div className="relative z-10 px-6 md:px-20">
                {/* HERO */}
                <motion.section
                    id="home"
                    style={{ opacity, scale }}
                    className="min-h-screen flex items-center pt-20"
                >
                    <div className="flex flex-col md:flex-row items-center gap-16 w-full">
                        {/* TEXT CONTENT */}
                        <div className="flex-1 flex flex-col pt-10 justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 w-fit"
                            >
                                <Sparkles className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm text-cyan-400">Available for new opportunities</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent"
                            >
                                Harsh Tawar
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
                            >
                                Full-Stack Engineer
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="max-w-2xl text-gray-400 text-lg mb-8 leading-relaxed"
                            >
                                Specialized in building <span className="text-cyan-400 font-semibold">enterprise-grade systems</span> with expertise in Full stack development, Node.js, Deployment, Android Development  and scalable backend architectures. Proven track record in IAM, fuel management systems, and android apps.
                            </motion.p>

                            {/* Key Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="grid grid-cols-3 gap-6 mb-10"
                            >
                                <StatCard number="6+" label="Projects" />
                                <StatCard number="3+" label="Tech Stacks" />
                                <StatCard number="1+" label="Years Exp" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="flex flex-wrap gap-4"
                            >
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
                                >
                                    View Projects
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="border border-gray-700 px-8 py-4 rounded-full hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                                >
                                    Get in Touch
                                </button>
                            </motion.div>
                        </div>

                        {/* ANIMATED IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-cyan-500/30 scale-110"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-purple-500/20 scale-125"
                            />

                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl opacity-40 animate-pulse" />

                            <img
                                src="/my_image.jpg"
                                alt="Harsh Tawar"
                                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400/50 shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </motion.section>

                {/* ABOUT / SKILLS */}
                <section id="about" className="py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Technical Expertise
                        </h2>
                        <p className="text-gray-400 text-lg mb-16">
                            Building robust solutions with modern technologies
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <SkillCategory
                                title="Frontend"
                                icon={<Code2 className="w-6 h-6" />}
                                skills={["React.js", "TailwindCSS", "Framer Motion", "WebView", "Responsive Design", "Bootstrap"]}
                                delay={0.1}
                            />
                            <SkillCategory
                                title="Backend"
                                icon={<Briefcase className="w-6 h-6" />}
                                skills={["Node.js", "PostgreSQL", "JWT Auth", "RESTful APIs", "Express"]}
                                delay={0.2}
                            />
                            <SkillCategory
                                title="Mobile & AI"
                                icon={<TrendingUp className="w-6 h-6" />}
                                skills={["Android (Java/Kotlin)", "Flutter(Dart)", "TensorFlow"]}
                                delay={0.3}
                            />
                        </div>
                    </motion.div>
                </section>

                {/* EXPERIENCE */}
                <section id="experience" className="py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase className="w-8 h-8 text-cyan-400" />
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Professional Experience
                            </h2>
                        </div>
                        <p className="text-gray-400 text-lg mb-16">
                            Contributing to enterprise-level solutions
                        </p>

                        <div className="space-y-8">
                            <ExperienceCard
                                role="Full-Stack Developer"
                                company="Enterprise Solutions"
                                period="2025 - Present"
                                achievements={[
                                    "Contributing to enterprise IAM system serving 50,000+ users with SSO, MFA, and LDAP/AD integration",
                                    "Developed critical modules: user CRUD operations, dynamic attributes, admin hierarchy, and trust reconciliation",
                                    "Led development of fuel management system with QR-based authentication,real time price, real time auditing etc.",
                                    "Implemented audit logging and compliance tracking for security-critical operations",
                                    "Collaborated with cross-functional teams on scalable backend microservices",
                                    "Built Android fuel management app with WebView integration and POS connectivity for QR-based transactions",
                                    "Developed authenticator app for secure multi-factor authentication",
                                    "Implemented audit logging and compliance tracking for security-critical operations across multiple systems"
                                ]}
                                delay={0.1}
                            />
                            <ExperienceCard
                                role="Android Developer Intern"
                                company="Multiple Projects"
                                period="2024 - 2025"
                                achievements={[
                                    "DNA-Medical: Collabrate in  a medical learning platform app for healthcare education",
                                    "Free Post: Built a social networking application with real-time updates and user interactions",
                                    "College Project: Created AI-powered dog breed classifier achieving 92% accuracy using CNN and TensorFlow",
                                    "Gained hands-on experience with Android SDK, Java/Kotlin, and mobile UI/UX design patterns"
                                ]}
                                delay={0.2}
                            />
                        </div>
                    </motion.div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="w-8 h-8 text-cyan-400" />
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Featured Projects
                            </h2>
                        </div>
                        <p className="text-gray-400 text-lg mb-16">
                            Delivering measurable impact through innovative solutions
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Project
                                title="Enterprise IAM Platform"
                                desc="Contributing to a full-fledged enterprise Identity & Access Management system with SSO, MFA, and advanced provisioning. Developed key modules including user CRUD operations, dynamic user attributes, admin hierarchy management, and trust reconciliation. System integrates with LDAP, Keycloak, and Active Directory for seamless authentication."
                                // impact="↑ 85% faster user provisioning | ↓ 70% security incidents"
                                tech={["Node.js", "PostgreSQL", "React", "JWT", "RBAC"]}
                                gradient="from-cyan-500/10 to-blue-500/10"
                                delay={0.1}
                            />

                            <Project
                                title="Fuel Management System"
                                desc="Full-stack solution with QR-based authentication, real-time wallet management, and role-based access. Implemented critical backend modules, comprehensive audit logging, and responsive cross-platform interfaces."
                                // impact="↓ 60% processing time | ↑ 99.9% transaction accuracy"
                                tech={["Node.js", "PostgreSQL", "JWT", "QR", "React", "TailwindCSS"]}
                                gradient="from-purple-500/10 to-pink-500/10"
                                delay={0.2}
                            />

                            <Project
                                title="Android Fuel Management App"
                                desc="Native Android application with WebView integration and POS machine connectivity. Enables offline-capable QR scanning and receipt generation with seamless backend synchronization."
                                // impact="↑ 40% operational efficiency | Offline support"
                                tech={["Android", "Java/Kotlin", "WebView", "QR", "POS SDK"]}
                                gradient="from-blue-500/10 to-cyan-500/10"
                                delay={0.3}
                            />

                            <Project
                                title="AI Dog Breed Classifier"
                                desc="Deep learning application using two-stage CNN pipeline: binary dog detection followed by breed classification with Inception ResNet-v2. Deployed on Android with optimized inference."
                                // impact="92% classification accuracy | <2s inference time"
                                tech={["TensorFlow", "Keras", "Android", "CNN", "Computer Vision"]}
                                gradient="from-green-500/10 to-emerald-500/10"
                                delay={0.4}
                            />

                            <Project
                                title="Enterprise File Management"
                                desc="SSO-enabled document management system with granular role-based permissions, version control, and comprehensive audit trails. Supports secure file sharing across organizational boundaries."
                                // impact="↑ 50% collaboration efficiency | Zero data breaches"
                                tech={["React", "Node.js", "PostgreSQL", "SSO", "S3"]}
                                gradient="from-orange-500/10 to-red-500/10"
                                delay={0.5}
                            />

                            <Project
                                title="User Management Platform"
                                desc="Demo IAM system showcasing modern identity management patterns. Features include user lifecycle management, dynamic role assignment, and real-time permission updates with audit logging."
                                // impact="Demo for enterprise clients | 100% uptime SLA"
                                tech={["Node.js", "PostgreSQL", "React", "Redis"]}
                                gradient="from-pink-500/10 to-purple-500/10"
                                delay={0.6}
                            />
                        </div>
                    </motion.div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="py-32 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl blur-3xl" />

                        <div className="relative border border-gray-800 rounded-3xl p-12 backdrop-blur-sm bg-gray-900/30">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Let's Build Together
                            </h2>
                            <p className="text-gray-400 text-lg mb-10">
                                Open to full-time opportunities at innovative companies.
                                Interested in roles involving backend architecture, Android development, or full-stack engineering.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-10">
                                <SocialLink href="https://github.com/Gujjarharsh" icon={<Github size={24} />} label="GitHub" />
                                <SocialLink href="https://www.linkedin.com/in/harsh-tawar" icon={<Linkedin size={24} />} label="LinkedIn" />
                                <SocialLink href="mailto:gujjarharshtawar@gmail.com" icon={<Mail size={24} />} label="Email" />
                            </div>

                            <div className="pt-8 border-t border-gray-800">
                                <p className="text-gray-500 text-sm">
                                    Based in Gurugram, India • Open to remote opportunities worldwide
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>

            {/* Footer */}
            <footer className="relative z-10 border-t border-gray-800 px-6 md:px-20 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>© 2026 Harsh Tawar. All rights reserved.</p>
                    <p>Built with React & TailwindCSS</p>
                </div>
            </footer>
        </div>
    );
}

function StatCard({ number, label }) {
    return (
        <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">{number}</div>
            <div className="text-sm text-gray-500">{label}</div>
        </div>
    );
}

function SkillCategory({ title, icon, skills, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
        >
            <div className="flex items-center gap-3 mb-4 text-cyan-400">
                {icon}
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <ul className="space-y-2">
                {skills.map((skill, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {skill}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

function ExperienceCard({ role, company, period, achievements, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="relative pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300"
        >
            <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500 rounded-full -translate-x-[9px]" />

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{role}</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <span>{company}</span>
                    <span>•</span>
                    <span>{period}</span>
                </div>
                <ul className="space-y-3">
                    {achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 flex gap-3">
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{achievement}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

function Project({ title, desc, tech, gradient, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative bg-gray-900/80 border border-gray-800 group-hover:border-gray-700 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                    {desc}
                </p>

                {/* {impact && (
                    <div className="mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                        <p className="text-sm text-cyan-400 font-medium">{impact}</p>
                    </div>
                )} */}

                <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-700 rounded-full text-gray-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            className="group flex items-center gap-3 px-6 py-3 bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
            <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                {icon}
            </span>
            <span className="text-gray-300 group-hover:text-white transition-colors">
                {label}
            </span>
        </a>
    );
}