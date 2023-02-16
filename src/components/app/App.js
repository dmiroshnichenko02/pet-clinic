import ClinicNav from "../clinicNav/ClinicNav";
import ClinicHeader from "../clinicHeader/ClinicHeader";
import ClinicProfesional from "../clinincProfesional/ClinicProfesional";

function App() {
  return (
    <>
      <header>
        <ClinicNav/>
        <ClinicHeader/>
      </header>
      <main>
        <ClinicProfesional/>
      </main>
    </>
  );
}

export default App;
