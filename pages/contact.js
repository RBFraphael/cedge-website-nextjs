import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Contact(){
  return (
    <motion.div id="contact" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.5}}>
      <Head>
        <title>Contact | CEDGE</title>
      </Head>
      <div className="container-fluid py-4 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}