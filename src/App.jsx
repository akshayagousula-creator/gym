import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiChevronDown, FiMail, FiPhone, FiMapPin, FiX } from 'react-icons/fi';
import { FaDumbbell, FaStar, FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, FaTrophy, FaPhone } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'BMI Calculator', href: '#bmi' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { label: 'Members', value: '1000+' },
  { label: 'Certified Trainers', value: '25+' },
  { label: 'Modern Equipment', value: '120+' },
  { label: 'Transformation Stories', value: '500+' },
];

const programs = [
  'Strength Training',
  'Fat Loss',
  'Bodybuilding',
  'CrossFit',
  'Functional Training',
  'Cardio',
  'HIIT',
  'Zumba',
  'Yoga',
  'Personal Training',
];

const plans = [
  {
    title: 'Starter Plan',
    price: '₹2,499',
    features: ['Access to gym floor', '1 personal training session', 'Diet guidance', 'Locker access'],
  },
  {
    title: 'Standard Plan',
    price: '₹4,299',
    features: ['Unlimited gym access', '3 personal training sessions', 'Group classes', 'Nutrition check'],
    popular: true,
  },
  {
    title: 'Premium Plan',
    price: '₹6,499',
    features: ['All standard benefits', 'Unlimited classes', 'Advanced body scan', 'Priority support'],
  },
  {
    title: 'Elite Plan',
    price: '₹8,999',
    features: ['VIP access', 'Dedicated trainer', 'Premium recovery tools', 'Custom meal plan'],
  },
];

const trainers = [
  { name: 'Arjun Reddy', title: 'Strength Coach', experience: '8 Years', niche: 'Bodybuilding', socials: ['instagram', 'facebook'] },
  { name: 'Priya Sharma', title: 'Nutrition Expert', experience: '6 Years', niche: 'Weight Loss', socials: ['instagram', 'twitter'] },
  { name: 'Rohit Singh', title: 'Functional Trainer', experience: '7 Years', niche: 'CrossFit', socials: ['instagram', 'facebook'] },
];

const testimonials = [
  { name: 'Swetha', review: 'CUTS N CURVE PRO GYM transformed my mindset and body with premium training and motivation.', rating: 5 },
  { name: 'Vikram', review: 'The equipment and coaching feel elite, and the results are real. This demo site captures the luxury experience.', rating: 5 },
  { name: 'Nisha', review: 'Friendly staff, modern space, and unbeatable energy. Perfect for serious fitness goals.', rating: 5 },
];

const faqs = [
  { q: 'Do you offer trial classes?', a: 'Yes, book a trial session to experience our premium training environment and certified coaches.' },
  { q: 'Can I switch plans later?', a: 'Absolutely. Our flexible plans allow easy upgrades and add-ons based on your goals.' },
  { q: 'Is personal training included?', a: 'Personal training is included in standard, premium, and elite plans, with customization available.' },
];

const blogPosts = [
  { title: '5 Strategies for Sustainable Fat Loss', excerpt: 'Learn the premium approach to fat loss with evidence-based coaching and recovery planning.' },
  { title: 'How Strength Training Builds Confidence', excerpt: 'Discover the power of a strength-focused program for long-term transformation.' },
  { title: 'Nutrition Tips for Busy Professionals', excerpt: 'Simple, refined nutrition guidance to fuel performance and muscle growth.' },
];

const WhyCard = ({ title, description, icon }) => (
  <motion.div whileHover={{ y: -6 }} className="group rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/20 transition-all duration-300">
    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white ring-1 ring-white/10">
      {icon}
    </div>
    <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm text-slate-300">{description}</p>
  </motion.div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [faqOpen, setFaqOpen] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const calculateBmi = () => {
    const h = Number(height) / 100;
    const w = Number(weight);
    if (!h || !w) return;
    const result = w / (h * h);
    setBmi(result.toFixed(1));
    if (result < 18.5) setCategory('Underweight');
    else if (result < 25) setCategory('Normal');
    else if (result < 30) setCategory('Overweight');
    else setCategory('Obese');
  };

  return (
    <div className={darkMode ? 'bg-primary text-white' : 'bg-white text-slate-900'}>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-xl font-bold tracking-[0.25em] text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-black">C</span>
            CUTS N CURVE
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={() => setDarkMode((prev) => !prev)} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
              {darkMode ? 'Light' : 'Dark'} Mode
            </button>
            <button className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-black transition hover:bg-red-600">Join Now</button>
          </div>
          <button onClick={() => setNavOpen(!navOpen)} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white lg:hidden">
            {navOpen ? <FiX size={20} /> : <FiChevronDown size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-primary/95 lg:hidden">
              <div className="flex flex-col gap-4 px-6 py-5">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-base font-medium text-slate-300 transition hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative overflow-hidden">
        <section id="home" className="relative min-h-[90vh] bg-hero bg-cover bg-center bg-no-repeat px-6 py-24 text-white sm:px-10 lg:px-20">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="mb-4 text-sm uppercase tracking-[0.35em] text-secondary">Premium Fitness Center</p>
                  <h1 className="text-5xl font-black uppercase tracking-[0.2em] text-white sm:text-6xl lg:text-7xl">CUTS N CURVE PRO GYM</h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Transform Your Body. Transform Your Life. Experience luxury training, elite equipment, and a performance-driven gym designed for real results.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a href="#membership" className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-4 text-sm font-semibold uppercase text-black shadow-glow ring-1 ring-white/20 hover:bg-red-600">Join Now <FiArrowUpRight /></a>
                  <a href="#plans" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold uppercase text-white hover:border-secondary hover:text-secondary">View Membership Plans <FiArrowUpRight /></a>
                  <a href="tel:+911234567890" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-4 text-sm font-semibold uppercase text-white hover:bg-white/15">Call Now: +91 12345 67890</a>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * index }} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/20 backdrop-blur-xl">
                  <p className="text-4xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-300">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="rounded-[2rem] bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-secondary">About Our Gym</p>
                <h2 className="mt-6 text-4xl font-bold text-white">Luxury Fitness Coaching Crafted for Every Goal</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">CUTS N CURVE PRO GYM is a premium fitness destination located in Hyderabad with certified trainers, imported modern equipment, and a refined environment built for strength, cardio, muscle gain, and weight loss.</p>
                <div className="grid gap-4 pt-8 sm:grid-cols-2">
                  {['Certified Trainers', 'Modern Imported Equipment', 'Strength Training', 'Cardio Zone', 'Weight Loss', 'Muscle Gain', 'Personal Training', 'Friendly Environment'].map((item) => (
                    <div key={item} className="rounded-3xl border border-white/10 bg-primary/80 p-5 text-sm text-slate-200 shadow-lg shadow-black/20">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(229,9,20,0.2),_transparent_45%)] p-6">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
                <div className="relative rounded-[1.75rem] border border-white/10 bg-black/40 p-8 text-white shadow-2xl shadow-black/40">
                  <p className="text-sm uppercase tracking-[0.4em] text-secondary">The premium experience</p>
                  <h3 className="mt-4 text-3xl font-bold">A refined training space for modern athletes</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-200">Our design balances minimal luxury with high-performance amenities, giving members an inspiring atmosphere for every workout session.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-slate-950 px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Programs</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Premium Training Programs</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">Choose from a curated range of programs designed for strength, performance, transformation, and long-term lifestyle results.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {programs.map((program) => (
                <motion.div whileHover={{ y: -10 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20 transition-all duration-300" key={program}>
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-secondary text-2xl text-black">{program.charAt(0)}</div>
                  <h3 className="text-xl font-semibold text-white">{program}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">High intensity training, expert coaching, and focused progress plans for every fitness objective.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="membership" className="px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Membership</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Find a Plan That Matches Your Ambition</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">From starter access to elite VIP performance, each plan is tailored for premium value and powerful results.</p>
            </div>
            <div id="plans" className="grid gap-6 lg:grid-cols-4">
              {plans.map((plan) => (
                <motion.div whileHover={{ y: -8 }} className={`rounded-[2rem] border ${plan.popular ? 'border-secondary bg-secondary/10' : 'border-white/10 bg-white/5'} p-8 shadow-2xl shadow-black/20`} key={plan.title}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-300">{plan.popular ? 'Most Popular' : 'Premium'}</p>
                    </div>
                    {plan.popular && <span className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase text-black">Popular</span>}
                  </div>
                  <p className="mt-8 text-5xl font-bold text-white">{plan.price}</p>
                  <ul className="mt-8 space-y-3 text-sm text-slate-300">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3"><span className="text-secondary">•</span>{feature}</li>
                    ))}
                  </ul>
                  <button className="mt-10 w-full rounded-full bg-secondary px-6 py-4 text-sm font-semibold uppercase text-black hover:bg-red-600">Join Now</button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="trainers" className="border-t border-white/10 bg-slate-950 px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Our Trainers</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Expert Coaches Driving Real Results</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trainers.map((trainer) => (
                <motion.div whileHover={{ y: -8 }} className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20" key={trainer.name}>
                  <div className="mb-6 h-72 overflow-hidden rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"></div>
                  <h3 className="text-2xl font-semibold text-white">{trainer.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-secondary">{trainer.title}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{trainer.experience} experience • {trainer.niche}</p>
                  <div className="mt-6 flex items-center gap-3 text-white/90">
                    {trainer.socials.includes('instagram') && <FaInstagram className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 p-2 text-secondary" />}
                    {trainer.socials.includes('facebook') && <FaFacebookF className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 p-2" />}
                    {trainer.socials.includes('twitter') && <FaTwitter className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 p-2" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Transformation Gallery</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Premium Gym Gallery</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <motion.div whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-[2rem] bg-white/5 shadow-2xl shadow-black/20" key={index}>
                  <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1558611848-73f7eb4001b9?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center transition duration-300 group-hover:scale-105"></div>
                  <div className="absolute inset-x-0 bottom-0 rounded-b-[2rem] bg-gradient-to-t from-black/90 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                    <p className="text-sm uppercase tracking-[0.35em] text-secondary">Premium</p>
                    <p className="mt-2 text-base font-semibold text-white">Workout Area Showcase</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="bmi" className="border-t border-white/10 bg-slate-950 px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-sm uppercase tracking-[0.35em] text-secondary">BMI Calculator</p>
                <h2 className="mt-4 text-4xl font-bold text-white">Calculate Your Fitness Category</h2>
                <p className="mt-4 max-w-xl text-base text-slate-300">Input your height and weight to quickly estimate your BMI and discover the category that matches your wellness goals.</p>
                <div className="mt-10 space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm text-slate-300">
                      Height (cm)
                      <input value={height} onChange={(e) => setHeight(e.target.value)} type="number" className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-secondary" placeholder="170" />
                    </label>
                    <label className="space-y-2 text-sm text-slate-300">
                      Weight (kg)
                      <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number" className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-secondary" placeholder="65" />
                    </label>
                  </div>
                  <button onClick={calculateBmi} className="w-full rounded-full bg-secondary px-6 py-4 text-sm font-semibold uppercase text-black hover:bg-red-600">Calculate BMI</button>
                  {bmi && (
                    <div className="rounded-3xl border border-white/10 bg-black/70 p-6 text-white">
                      <p className="text-lg font-semibold">Your BMI: <span className="text-secondary">{bmi}</span></p>
                      <p className="mt-2 text-sm text-slate-300">Category: <span className="font-semibold text-white">{category}</span></p>
                    </div>
                  )}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="grid gap-6">
                <WhyCard title="Imported Equipment" description="Train with premium machines and free weights imported for elite performance." icon={<FaDumbbell size={20} />} />
                <WhyCard title="Certified Trainers" description="Our coaches combine expertise with modern training science." icon={<FaTrophy size={20} />} />
                <WhyCard title="Nutrition Guidance" description="Personalized plans for muscle gain, fat loss, and recovery." icon={<FiMail size={20} />} />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="why" className="px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Why Choose Us</p>
              <h2 className="mt-4 text-4xl font-bold text-white">A Premium Gym Experience that Feels Exclusive</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <WhyCard title="Imported Equipment" description="Top-tier machines for every movement and goal." icon={<FaDumbbell size={20} />} />
              <WhyCard title="Certified Trainers" description="Elite coaching for safe, efficient progress." icon={<FaStar size={20} />} />
              <WhyCard title="Affordable Membership" description="Premium plans built for real value and results." icon={<FiPhone size={20} />} />
              <WhyCard title="Hygienic Environment" description="Spotless training spaces with modern sanitization." icon={<FiMapPin size={20} />} />
              <WhyCard title="Locker Facility" description="Private lockers, showers, and recovery amenities." icon={<FaWhatsapp size={20} />} />
              <WhyCard title="Nutrition Guidance" description="Custom meal strategies for every objective." icon={<FiMail size={20} />} />
              <WhyCard title="Free Parking" description="Easy access and convenience for local members." icon={<FaInstagram size={20} />} />
              <WhyCard title="Flexible Timings" description="Open hours that fit busy work and family routines." icon={<FaFacebookF size={20} />} />
            </div>
          </div>
        </section>

        <section id="testimonials" className="border-t border-white/10 bg-slate-950 px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Testimonials</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Member Stories from Our Gym</h2>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
              <div className="absolute inset-y-0 left-0 w-1 bg-secondary" />
              <motion.div key={testimonialIndex} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5 }} className="relative">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center shadow-lg shadow-black/40" />
                      <div>
                        <p className="text-xl font-semibold text-white">{testimonials[testimonialIndex].name}</p>
                        <div className="flex items-center gap-1 text-secondary">
                          {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, ratingIndex) => (
                            <FaStar key={ratingIndex} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="max-w-3xl text-lg leading-8 text-slate-300">“{testimonials[testimonialIndex].review}”</p>
                  </div>
                  <div className="flex gap-3">
                    {testimonials.map((_, indicator) => (
                      <button key={indicator} onClick={() => setTestimonialIndex(indicator)} className={`h-3 w-3 rounded-full ${indicator === testimonialIndex ? 'bg-secondary' : 'bg-white/20'}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">FAQ</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <motion.div whileHover={{ y: -4 }} key={faq.q} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
                  <button onClick={() => setFaqOpen(faqOpen === index ? -1 : index)} className="flex w-full items-center justify-between text-left text-lg font-semibold text-white">
                    <span>{faq.q}</span>
                    <span className="text-secondary">{faqOpen === index ? '-' : '+'}</span>
                  </button>
                  {faqOpen === index && <p className="mt-4 text-sm leading-7 text-slate-300">{faq.a}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="tips" className="border-t border-white/10 bg-slate-950 px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Fitness Tips</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Expert Nutrition & Workout Tips</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <motion.article whileHover={{ y: -8 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20" key={post.title}>
                  <p className="text-sm uppercase tracking-[0.35em] text-secondary">Blog</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{post.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">Read More <FiArrowUpRight /></a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-secondary">Contact</p>
                <h2 className="mt-4 text-4xl font-bold text-white">Visit CUTS N CURVE PRO GYM Today</h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">Premium fitness services at Mallikarjuna Complex, Above HDFC Bank, Doolapally Road, Hyderabad. Reach out for membership, coaching, and VIP training experiences.</p>
                <div className="mt-10 space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-2xl bg-secondary p-3 text-black"><FiMapPin /></div>
                    <div>
                      <p className="font-semibold text-white">Address</p>
                      <p className="text-sm text-slate-300">Mallikarjuna Complex, Above HDFC Bank, Doolapally Road, Hyderabad.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-2xl bg-secondary p-3 text-black"><FiPhone /></div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-sm text-slate-300">+91 12345 67890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-2xl bg-secondary p-3 text-black"><FiMail /></div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-sm text-slate-300">hello@cutsncurvepro.gym</p>
                    </div>
                  </div>
                  <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/50">
                    <iframe title="Gym Location" className="h-72 w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.45678901234567!3d17.412345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c1d3d4e1f9%3A0x1234567890abcdef!2sHDFC%20Bank%20Doolapally%20Road!5e0!3m2!1sen!2sin!4v0000000000000" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-white/10 bg-slate-950 p-8 shadow-2xl shadow-black/40">
                <p className="text-sm uppercase tracking-[0.35em] text-secondary">Newsletter</p>
                <h3 className="mt-4 text-3xl font-bold text-white">Stay Updated with Luxury Fitness Tips</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">Subscribe for premium workout and nutrition insights from CUTS N CURVE PRO GYM.</p>
                <form className="mt-8 space-y-4">
                  <input type="email" placeholder="Enter your email" className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-4 text-white outline-none focus:border-secondary" />
                  <button className="w-full rounded-full bg-secondary px-6 py-4 text-sm font-semibold uppercase text-black hover:bg-red-600">Subscribe</button>
                </form>
                <div className="mt-8 flex items-center gap-4 text-white/90">
                  <FaWhatsapp className="h-12 w-12 rounded-2xl bg-white/5 p-3 text-secondary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Floating Support</p>
                    <p className="mt-2 text-base font-semibold text-white">WhatsApp & Call support for quick membership queries.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-primary px-6 py-12 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-secondary">Cuts N Curve Pro Gym</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">Demo portfolio gym website created with premium styling, responsive sections, and elevated branding for a luxury fitness experience.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#membership" className="hover:text-white">Membership</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-slate-500">© 2026 CUTS N CURVE PRO GYM. This is a demo portfolio project and not the official gym website.</div>
      </footer>

      <a href="tel:+911234567890" className="fixed bottom-24 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-black shadow-2xl shadow-secondary/40 transition hover:bg-red-600">
        <FaPhone className="h-5 w-5" /> Call Us
      </a>
      <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-black shadow-2xl shadow-[#25D366]/40">
        <FaWhatsapp className="h-5 w-5" /> WhatsApp
      </a>
      <a href="#home" className="fixed bottom-24 left-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-2xl shadow-black/30 transition hover:bg-white/20">↑</a>
    </div>
  );
}

export default App;
