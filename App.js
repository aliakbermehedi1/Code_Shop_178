// import logo from './logo.svg';
import './App.css';
import { CustomerService } from './CustomerService';
import DataTable from './Table/DataTable';

function App() {
  return (
    <div className="App">
      <h2 style={{color: 'red', background: 'yellow' }}>Datatable Creation</h2>
     <h2>ali</h2>
      <DataTable/>
      <CustomerService/>
   </div>
  );
}

export default App;
