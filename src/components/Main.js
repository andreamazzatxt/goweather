import { useContext, useEffect, useState } from "react";
import { store } from "../store";
import style from "./Main.module.css";
import { motion } from "framer-motion";
import { spring } from "./animations";
import { geoCoding } from "../api";

function Main(props) {
  const { city, setCity } = useContext(store);
  const [load, setLoad] = useState(false);
  const [toSearch, setToSearch] = useState("");
  const [results, setResults] = useState([]);
  // desactive subimitting form
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    setToSearch(event.target.value);
  };
  //fetch data each time input changes
  useEffect(() => {
    async function fetch() {
      let resp = await geoCoding(toSearch);
      setResults(resp);
    }
    if (toSearch.length > 2) {
      fetch();
    }
  }, [toSearch]);
  //handleClik select city
  const handleClick = (target) => {
    setCity(target);
  };

  // Loading effect timeout
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 600);
  }, []);

  useEffect(() => {}, [city]);
  return (
    <div className={style.screen}>
      <div className={style.card}>
        <motion.div layout transition={spring} className={style.title}>
          Go <span className={style.underline}>Weather</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className={style.circle}
          ></motion.div>
        </motion.div>
        {load && (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            onSubmit={handleSubmit}
            className={style.form}
          >
            <i id={style.iconMag} className="fas fa-search"></i>
            <input
              onChange={handleChange}
              className={style.input}
              type="text"
            ></input>
          </motion.form>
        )}

        <motion.div className={style.resultBox}>
          {results.map((entry, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleClick(entry)}
                key={entry.lat + entry.lon + entry.city + index}
                className={style.miniTile}
              >
                {entry.city} | {entry.country}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
