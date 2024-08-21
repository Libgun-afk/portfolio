import { motion } from "framer-motion";

export const Navigation = ({ open }) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <motion.div
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={variants}
          style={{
            position: "fixed",
            top: "36px",
            right: 0,
            bottom: 0,
            width: "100%",
            background: "#fff",
            zIndex: 1,
          }}
        >
          <div className="md:flex items-center gap-6 text-white">
            <a href="">About</a>
            <a href="">Work</a>
            <a href="">Testimonias</a>
            <a href="">Contact</a>
            <a href="">Line</a>
            <div className="items-center gap-4 flex-col">
              <h1>Mobile Header</h1>
              <button>Download CV</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
