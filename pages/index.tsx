import { motion } from "framer-motion";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { fadeInUp, routeAnimation, stagger } from "../animate";
import ServiceCard from "../components/service-card";
import { services } from "../mokData";

const index = ({ endpoint }: any) => {
  console.log("endpoint", endpoint);

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <Head>
        <title> Amjad | Web Developer | Portfolio</title>
      </Head>
      <h5 className="my-3 text-base font-medium">
        <b>Software Engineer(Intern) PrayersConnect (October 2021 to present)</b>{" "}
        Working as a front-end engineer. Helped developing the 2nd iteration of
        their website which is currently{" "}
        <a
          className="text-green font-bold"
          href="https://prayersconnect.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Live{" "}
        </a>{" "}
        now.Technologies I got exposure to while working here:{" "}
        <b>TypeScript, Next.js, React Query, Agile (Scrum), Jest, Jotai</b>
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 my-3 md:grid-cols-2"
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

export const getServerSideProps = async (context: GetServerSideProps) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();
  // console.log(process.env.VERCEL_URL);

  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};

// export const getStaticProps = async (context: GetStaticProps) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log('Static SERVER: ', data.services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
