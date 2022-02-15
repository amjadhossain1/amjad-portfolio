import { GetServerSideProps, GetStaticProps } from "next";
import ServiceCard from "../components/service-card";
import { services } from "../mokData";

const index = () => {
  return (
    <div className="flex flex-col px-6 pt-1">
      <h5 className="my-3 text-base font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (context: GetServerSideProps) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log('SERVER: ', data.services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

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
