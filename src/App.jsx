import styles from "./App.module.css";
import MainComponent from "./components/MainComponent/MainComponent";



function App() {

  return (
    <div className={styles.app}>
      {/* Temporário */}
      <div style={
        {
          backgroundColor: "yellow",
          width: "100%",
          position: "fixed",
          top: "-0.05%",
          left: "0",
          padding: "1.1rem",
          fontWeight: "700",
          textAlign: "center",
          letterSpacing: "0.75px",
          textTransform: "uppercase",
          fontSize: "1.6rem",
          

        }}> Under development </div>

      <MainComponent
      />
    </div>
  );
};

export default App;
