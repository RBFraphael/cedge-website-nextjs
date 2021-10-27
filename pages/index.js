import Head from 'next/head';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import competitiveCedge from '../resources/images/competitive-cedge.png';
import { useEffect } from 'react';

export default function Home(){
  return (
    <motion.div id="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.5}}>
      <Head>
        <title>Welcome to CEDGE</title>
      </Head>
      
      <section className="container-fluid top-section">
        <div className="container">
          <div className="row fullheight-section py-4">
            <div className="col-12 text-center align-self-center">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .5 }}>
                <h3 className="fw-light text-white mb-4 dinpro text-uppercase">Introducing</h3>
              </motion.div>
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .75, duration: .5 }}>
                <Image src={competitiveCedge} alt="Competitive Cedge" className="img-fluid" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid orange-section">
        <div className="container">
          <div className="row justify-content-center fullheight-section py-4">
            <div className="col-12 col-lg-8 text-center align-self-center">
              <h2 className="text-white dinpro text-uppercase display-5">THE WORLD'S FIRST LOW-COST DIGITAL PRODUCTION STUDIO BUILT SPECIFICALLY FOR HEALTHCARE COMMUNICATIONS</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid statistics-section">
        <div className="container">
          <div className="row fullheight-section py-4">
            <div className="col-12 align-self-center text-center">
              <h4 className="fw-light dinpro text-white text-uppercase mb-5">Unbeatable combination in digital production</h4>
              <div className="mb-4">
                <StatisticsItem number="1" title="Deep Healthcare Experience" subtitle="More than 30 years of healthcare communication" />
              </div>
              <div className="mb-4">
                <StatisticsItem number="2" title="World Class Quality" subtitle="We deliver world class production for world class clients" />
              </div>
              <div className="mb-4">
                <StatisticsItem number="3" title="Ultra Low Costs" subtitle="Use the exchange rate to your advantage" />
              </div>
              <div className="mb-4">
                <StatisticsItem number="4" title="Dedicated Partnership" subtitle="Introducing your dedicated Account Manager" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function StatisticsItem(props){
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const scrollAnimations = {
    visible: { opacity: 1, y: 0, transition: { duration: .5 } },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if(inView){
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView])

  return (
    <motion.div variants={scrollAnimations} initial="hidden" animate={controls} ref={ref}>
      <h1 className="indicator-number">{ props.number }</h1>
      <h1 className="dinpro text-danger display-4 text-uppercase">{ props.title }</h1>
      <p className="text-white fw-bold georgia fst-italic h4">{ props.subtitle }</p>
    </motion.div>
  )
}