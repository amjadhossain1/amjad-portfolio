import Bar from "../components/bar";
import { languages, tools } from "../mokData";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animate";
import Head from "next/head";

const resume = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      <Head>
        <title>Web Developer | Resume | Amjad Portfolio</title>
      </Head>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              (BSS) degree | Feni Government College (present | 2018 )
            </h5>
            <p className="font-semibold">Academy of Technology (2019-2022)</p>
            <p className="my-3">
              I am currently working as a front-end Software Engineer Intern
              PrayersConnect (October 2021 to present)
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">
              Software Engineer PrayersConnect(Intern)
            </p>
            <p className="my-3">
              Working as a front-end engineer. Helped developing the 2nd
              iteration of their website which is currently{" "}
              <a className="text-green font-bold" href="https://prayersconnect.com/"> Live </a> 
              now.Technologies I got exposure to while working here:{" "}
              <b>
                TypeScript, Next.js, React Query, Agile (Scrum), Jest, Jotai
              </b>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default resume;
