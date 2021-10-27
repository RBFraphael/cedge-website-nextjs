import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Header from './header';

export default function Layout({ children }){
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <Header />
            <main>
                <AnimatePresence exitBeforeEnter>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.5}}>
                        { children }
                    </motion.div>
                </AnimatePresence>
            </main>
        </>
    )
}