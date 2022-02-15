// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../mokData";

// type Data = {
//   name: string;
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ services });
}

// export default (req: NextApiRequest, res: NextApiResponse) => {
// //   console.log(services);
//   res.status(200).json({ services });
// };
